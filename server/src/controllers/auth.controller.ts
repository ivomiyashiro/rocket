import { Response, Request } from 'express';
import User from '../models/User.model';
import { IAuthRequest } from '../interfaces';
import { generateJWT } from '../helpers';
import { getGoogleOAuthTokens, getGoogleUser } from '../services';

export const signUp = async (req: Request, res: Response) => {

  const { email } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) return res.status(400).json({
      ok: false,
      msg: 'Email is already in use.'
    });

    user = new User(req.body);
    await user.save();

    const token = await generateJWT({ uid: user.id, name: user.name, role: user.role  });
    res.cookie('token', token);

    return res.status(201).json({
      ok: true,
      user: {
        uid: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

export const singIn = async (req: Request, res: Response) => {

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({
      ok: false,
      msg: 'Email or password incorrect.',
    });

    const isValidPassword = user.comparePassword(password);

    if (!isValidPassword) return res.status(400).json({
      ok: false,
      msg: 'Email or password incorrect.'
    });

    const token = await generateJWT({ uid: user.id, name: user.name, role: user.role  });
    res.cookie('token', token);

    return res.status(200).json({
      ok: true,
      user: {
        uid: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

export const renewUser = async (req: IAuthRequest, res: Response) => {

  try {
    if (!req.auth) throw new Error;
    const { uid, name, role } = req.auth;

    const token = await generateJWT({ uid, name, role });
    res.cookie('token', token);

    return res.json({ ok: true });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

export const googleOauthHandler = async (req: Request, res: Response) => {

  const code = req.query.code as string;

  try {
    const { id_token, access_token } = await getGoogleOAuthTokens({ code });
    console.log({ id_token, access_token });

    const googleUser = await getGoogleUser({ id_token, access_token });

    console.log({ googleUser });

    if (!googleUser.verified_email) {
      return res.status(403).json({
        ok: false,
        msg: 'Google account is not verified.'
      });
    }

    // upsert the user
    const user = await User.findOneAndUpdate(
      { email: googleUser.email },
      {
        email: googleUser.email,
        name: googleUser.name
      },
      {
        upsert: true,
        new: true,
      }
    );

    const token = await generateJWT({ uid: user.id, name: user.name, role: user.role });

    res.cookie('accessToken', token);

    return res.json({
      ok: true,
      user: {
        uid: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

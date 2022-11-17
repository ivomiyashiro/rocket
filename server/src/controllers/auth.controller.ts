import { Response, Request } from 'express';
import User from '../models/User.model';
import { generateJWT } from '../helpers';
import { IAuthRequest } from '../types';

export const createUser = async (req: Request, res: Response) => {

  const { email } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) return res.status(400).json({
      ok: false,
      msg: 'Email is already in use.',
    });

    user = new User(req.body);
    await user.save();

    const token = await generateJWT({ uid: user.id, name: user.name, role: user.role  });

    return res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
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

    return res.status(200).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
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

    return res.json({
      ok: true,
      uid,
      name,
      token
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

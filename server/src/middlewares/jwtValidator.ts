import { NextFunction, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { IAuthRequest } from 'interfaces';

export const jwtValidator = (req: IAuthRequest, res: Response, next: NextFunction) => {

  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'Unauthorized request.'
    });
  }

  try {
    const { uid, name, role } = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    req.auth = { uid, name, role };

  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Unauthorized request.'
    });
  }

  return next();
};

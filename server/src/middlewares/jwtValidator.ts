import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const jwtValidator = (req: Request, res: Response, next: NextFunction) => {

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
      process.env.SECRET_JWT_SEED as string
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
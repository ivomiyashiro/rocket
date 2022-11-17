import { Request } from 'express';

export interface IAuthRequest extends Request {
  auth?: {
    uid: string,
    name: string,
    role: 'CUSTOMER' | 'ADMIN' | 'SUPERADMIN',
  }
}

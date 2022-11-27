export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: 'CUSTOMER' | 'ADMIN' | 'SUPERADMIN';
}


// Custom definitions

declare namespace Express {
  export interface Request {
    auth: {
      uid: string,
      name: string,
      role: 'CUSTOMER' | 'ADMIN' | 'SUPERADMIN',
    }
  }
}

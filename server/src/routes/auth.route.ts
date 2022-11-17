import { Router } from 'express';
import { check } from 'express-validator';

import { fieldsValidator, jwtValidator } from '../middlewares';

import { createUser, singIn, renewUser } from '../controllers/auth.controller';
 
const router = Router();
 
router.post(
  '/register',
  [
    check('name', 'Name is required.').not().isEmpty(),
    check('email', 'Email is required.').isEmail(),
    check('password', 'Password is required.').not().isEmpty(),
    check('password', 'Password is required.').isLength({ min: 6 }),
    fieldsValidator
  ],
  createUser
);
 
router.post(
  '/',
  [
    check('email', 'Email is required.').isEmail(),
    check('password', 'Password is required.').isLength({ min: 6 }),
    fieldsValidator
  ],
  singIn
);
 
router.get('/renew', jwtValidator, renewUser);
 
export default router;

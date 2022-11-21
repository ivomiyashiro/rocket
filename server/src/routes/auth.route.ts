import { Router } from 'express';
import { check } from 'express-validator';

import { validateFields, validateJWT } from '../middlewares';

import { signUp, singIn, renewUser, googleOauthHandler } from '../controllers/auth.controller';
 
const router = Router();
 
router.post(
  '/signup',
  [
    check('name', 'Name is required.').not().isEmpty(),
    check('email', 'Email is required.').isEmail(),
    check('password', 'Password is required.').not().isEmpty(),
    check('password', 'Password is required.').isLength({ min: 6 }),
    validateFields
  ],
  signUp
);
 
router.post(
  '/signin',
  [
    check('email', 'Email is required.').isEmail(),
    check('password', 'Password is required.').isLength({ min: 6 }),
    validateFields
  ],
  singIn
);
 
router.get('/renew', validateJWT, renewUser);

router.get('/signin/google', googleOauthHandler);
 
export default router;

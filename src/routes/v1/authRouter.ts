// example router

import { Router } from 'express';
import { notAllowedMethod, notFoundEndpoint } from '../../middlewares/notAllowedHandler';
import { signup } from '../../controllers/authController';

const authRouter = Router();

authRouter.route('/signup')
  .post(
    signup
  )
  .all(notAllowedMethod);

authRouter.route('*').all(notFoundEndpoint);

export default authRouter;
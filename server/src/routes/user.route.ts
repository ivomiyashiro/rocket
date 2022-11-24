import { Router } from 'express';
import { validateCustomer, validateJWTAdmin } from '../middlewares';
import { getAllUsers, getCustomerOrder, getCustomerOrders } from '../controllers/user.controller';
 
const router = Router();

router.get('/', validateJWTAdmin, getAllUsers);

router.get('/:uid/orders', validateCustomer, getCustomerOrders);

router.get('/:uid/orders/:id', validateCustomer, getCustomerOrder);


export default router;

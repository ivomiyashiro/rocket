import { Router } from 'express';
import { validateCustomer } from '../middlewares';
import { getCustomerOrder, getCustomerOrders } from '../controllers/user.controller';
 
const router = Router();

router.get('/:uid/orders', validateCustomer, getCustomerOrders);

router.get('/:uid/orders/:id', validateCustomer, getCustomerOrder);


export default router;

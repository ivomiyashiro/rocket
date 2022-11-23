import { Router } from 'express';
import { check } from 'express-validator';
import { isValidOrderStatus } from '../helpers';
import { validateFields, validateJWTAdmin, validateJWTCustomer } from '../middlewares';
import { createOrder, getAllOrders, getOneOrder, updateOrderStatus } from '../controllers/orders.controller';

const router = Router();

router.post(
  '/', 
  [
    validateJWTCustomer,
    check('customer.name', 'Customer name is required.').not().isEmpty(),
    check('customer.email', 'Customer email is required.').not().isEmpty(),
    check('customer.email', 'Email is not valid.').isEmail(),
    check('phoneNumber', 'Phone number is required').not().isEmpty(),
    check('shippingAddress.city', 'Shipping address city is required.').not().isEmpty(),
    check('shippingAddress.locality', 'Shipping address locality is required.').not().isEmpty(),
    check('shippingAddress.address', 'Shipping address address is required.').not().isEmpty(),
    check('shippingAddress.zip', 'Shipping address zip is required.').not().isEmpty(),
    validateFields
  ],
  createOrder
);

router.use(validateJWTAdmin);

router.get('/', getAllOrders);
 
router.get('/:id', getOneOrder);

router.put(
  '/:id', 
  [
    check('status', 'New status is required.').not().isEmpty(),
    check('status', 'Status is not valid.').custom(isValidOrderStatus),
    validateFields
  ],
  updateOrderStatus
);


export default router;

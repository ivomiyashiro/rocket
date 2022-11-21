import { Router } from 'express';
import { check } from 'express-validator';
import { validateFields, validateJWTSuperAdmin } from '../middlewares';
import { createProduct, getAllProducts, getOneProduct } from '../controllers/products.controller';

const router = Router();
 
router.get('/', getAllProducts);
 
router.get('/:id', getOneProduct);

// Protected routes
router.use(validateJWTSuperAdmin);

router.post(
  '/',
  [
    check('title', 'Title is required.').not().isEmpty(),
    check('brand', 'Brand is required.').not().isEmpty(),
    check('category', 'Category is required.').not().isEmpty(),
    validateFields
  ],
  createProduct
);

router.delete('/:id');

router.put('/:id');
 
export default router;

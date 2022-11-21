import { Router } from 'express';
import { check } from 'express-validator';
import { validateFields, validateJWTSuperAdmin } from '../middlewares';
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from '../controllers/products.controller';

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

router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);
 
export default router;

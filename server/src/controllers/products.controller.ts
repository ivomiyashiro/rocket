import { Request, Response } from 'express';
import { Product } from '../models';

const DEFAULT_LIMIT = 10;
const DEFAULT_PAGE = 1;
const DEFAULT_FILTERS = '{}';
const DEFAULT_SORT_BY = 'title';
const DEFAULT_ORDER_BY = 'asc';

export const getAllProducts = async (req: Request, res: Response) => {

  const { sortBy: reqSortBy, orderBy: reqOrderBy, limit: reqLimit, page: reqPage, filters: reqFilters }: any = req.query;

  const filters = reqFilters || DEFAULT_FILTERS;
  const orderBy = reqOrderBy || DEFAULT_ORDER_BY;
  const sortBy = reqSortBy || DEFAULT_SORT_BY;
  const limit = Number(reqLimit) || DEFAULT_LIMIT;
  const page = Number(reqPage) || DEFAULT_PAGE;

  try {
    const products = await Product.find( JSON.parse(filters || DEFAULT_FILTERS) )
      .limit(limit)
      .skip((page - 1) * limit)
      .sort([[sortBy, orderBy]])
      .exec();

    const count = await Product.count();

    return res.json({
      ok: true,
      products,
      totalPages: Math.ceil(count / limit)
    });
    
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};


export const getOneProduct = async (req: Request, res: Response) => {

  try {
    const products = await Product.findById(req.params.id);

    return res.json({
      ok: true,
      products
    });
    
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

export const createProduct = async (req: Request, res: Response) => {

  try {
    const product = new Product(req.body);
    await product.save();

    return res.json({
      ok: true,
      product
    });
    
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {

  const productsIDs = req.params.id;

  try {
    const { deletedCount } = await Product.deleteMany({ id: { $in: productsIDs } });

    return res.json({
      ok: true,
      msg: `${ deletedCount } products deleted.`
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  
  const id = req.params.id;
  const update = req.body.data;

  try {
    await Product.findOneAndUpdate({ id }, update);

    return res.json({
      ok: true,
      msg: 'Product updated.'
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

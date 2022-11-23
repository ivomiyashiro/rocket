import { Request, Response } from 'express';
import { IAuthRequest } from 'interfaces';
import { Order, User } from '../models';

const DEFAULT_LIMIT = 10;
const DEFAULT_PAGE = 1;
const DEFAULT_FILTERS = {};
const DEFAULT_SORT_BY = 'created_at';
const DEFAULT_ORDER_BY = 'asc';

export const getAllOrders = async (req: Request, res: Response) => {

  const { sortBy: reqSortBy, orderBy: reqOrderBy, limit: reqLimit, page: reqPage, filters: reqFilters }: any = req.query;

  const filters = JSON.parse(reqFilters) || DEFAULT_FILTERS;
  const orderBy = reqOrderBy || DEFAULT_ORDER_BY;
  const sortBy = reqSortBy || DEFAULT_SORT_BY;
  const limit = Number(reqLimit) || DEFAULT_LIMIT;
  const page = Number(reqPage) || DEFAULT_PAGE;

  try {
    const orders = await Order.find(filters)
      .limit(limit)
      .skip((page - 1) * limit)
      .sort([[sortBy, orderBy]])
      .exec();

    const count = await Order.count();

    return res.json({
      ok: true,
      orders,
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

export const getOneOrder = async (req: Request, res: Response) => {

  try {
    const order = await Order.findById(req.params.id);

    return res.json({
      ok: true,
      order
    });
    
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

export const createOrder = async (req: IAuthRequest, res: Response) => {

  try {
    const customer = await User.findById(req.auth?.uid, 'name email');
    const order = new Order({ ...req.body, customer });
    await order.save();

    return res.json({
      ok: true,
      order
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  
  const orderID = req.params.id;
  const orderStatus = req.body.status.toUpperCase();

  try {
    await Order.findByIdAndUpdate(orderID, { status: orderStatus });

    return res.json({
      ok: true,
      msg: `Order status is now ${ orderStatus }`
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

// export const searchOrder = (req: Request, res:Response) => {
  
// }



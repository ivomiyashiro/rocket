import { Response } from 'express';
import { Order } from '../models';
import { IAuthRequest } from '../interfaces';

const DEFAULT_LIMIT = 10;
const DEFAULT_PAGE = 1;
const DEFAULT_FILTERS = {};
const DEFAULT_SORT_BY = 'created_at';
const DEFAULT_ORDER_BY = 'asc';

export const getCustomerOrders = async (req: IAuthRequest, res: Response) => {

  const { sortBy: reqSortBy, orderBy: reqOrderBy, limit: reqLimit, page: reqPage, filters: reqFilters }: any = req.query;

  const filters = { ...JSON.parse(reqFilters), id: req.auth?.uid } || { ...DEFAULT_FILTERS, id: req.auth?.uid };
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

export const getCustomerOrder = async (req: IAuthRequest, res: Response) => {

  try {
    const order = await Order.findOne({ id: req.params.id });

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

import { createAction, props } from '@ngrx/store';
import { Shop } from '../models/shop';

export const loadShops = createAction('[Shops] Load items from server');

export const shopsLoaded = createAction(
  '[Shops] Load success',
  props<{ shops: Shop[] }>()
);

export const shopsLoadFailed = createAction(
  '[Shops] Load failure',
  props<{ error: any }>()
);

export const ShopActionTypes = {
  loadShops,
  shopsLoaded,
  shopsLoadFailed,
};

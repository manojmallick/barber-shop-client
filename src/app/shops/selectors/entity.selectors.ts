import { shopReducer, ShopState } from '../reducers/shops.reducers';

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from '../reducers/shops.reducers';

export const shopFeatureSelector = createFeatureSelector<ShopState>('shops');

export const getAllShops = createSelector(
  shopFeatureSelector,
  selectAll
);

export const areShopsLoaded = createSelector(
  shopFeatureSelector,
  state => state.shopsLoaded
);
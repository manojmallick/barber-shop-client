import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ShopActionTypes, shopsLoaded } from '../actions/shops.actions';
import { Shop } from '../models';
export interface ShopState extends EntityState<Shop> {
  shopsLoaded: boolean;
  shopsLoading: boolean;
  error: string;
}

export const adapter: EntityAdapter<Shop> = createEntityAdapter<Shop>();

export const initialState = adapter.getInitialState({
  shopsLoaded: false,
  shopsLoading: false,
  error: '',
});

export const shopReducer = createReducer(
  initialState,

  on(ShopActionTypes.shopsLoaded, (state, action) => {
    return adapter.setAll(action.shops, {
      ...state,
      shopsLoaded: true,
      shopsLoading: false,
    });
  }),
  on(ShopActionTypes.loadShops, (state, action) => {

    return adapter.getInitialState({ ...state, shopsLoading: true });
  }),
  on(ShopActionTypes.shopsLoadFailed, (state, action) => {
    return adapter.setAll(action.error, {
      ...state,
      shopsLoaded: true,
      shopsLoading: false,
      error: action.error,
    });
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();

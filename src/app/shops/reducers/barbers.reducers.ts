import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { BarberActionTypes } from '../actions/barbers.actions';
import { Barber } from '../models';
export interface BarberState extends EntityState<Barber> {
  barbersLoaded: boolean;
  barbersLoading: boolean;
  error: string;
}

export const adapter: EntityAdapter<Barber> = createEntityAdapter<Barber>();

export const initialState = adapter.getInitialState({
  barbersLoaded: false,
  barbersLoading: false,
  error: '',
});

export const barberReducer = createReducer(
  initialState,

  on(BarberActionTypes.barbersLoaded, (state, action) => {
    return adapter.setAll(action.barbers, {
      ...state,
      barbersLoaded: true,
      barbersLoading: false,
    });
  }),
  on(BarberActionTypes.loadBarbers, (state) => {

    return adapter.getInitialState({ ...state, barbersLoading: true });
  }),
  on(BarberActionTypes.barbersLoadFailed, (state, action) => {
    return adapter.setAll(action.error, {
      ...state,
      barbersLoaded: true,
      barbersLoading: false,
      error: action.error,
    });
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();

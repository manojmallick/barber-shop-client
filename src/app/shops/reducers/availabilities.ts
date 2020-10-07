import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { AvailabilitiesTypes } from '../actions/availabilities.actions';
import { Availability } from '../models/shop';

export interface AvailabilitiesState extends EntityState<Availability> {
  availabilitiesLoaded: boolean;
  availabilitiesLoading: boolean;
  error: string;
}

export const adapter: EntityAdapter<Availability> = createEntityAdapter<
  Availability
>();

export const initialState = adapter.getInitialState({
  availabilitiesLoaded: false,
  availabilitiesLoading: false,
  error: '',
});

export const AvailabilityReducer = createReducer(
  initialState,

  on(AvailabilitiesTypes.availabilitiesLoaded, (state, action) => {
    console.log(action)
    return adapter.setAll( action.Availabilities,{
      ...state,
      availabilitiesLoaded: true,
      availabilitiesLoading: false
    });
  }),
  on(AvailabilitiesTypes.loadAvailabilities, (state) => {
    return adapter.getInitialState({ ...state, availabilitiesLoading: true });
  }),
  on(AvailabilitiesTypes.availabilitiesLoadFailed, (state, action) => {
    return adapter.setAll(action.error, {
      ...state,
      availabilitiesLoaded: true,
      availabilitiesLoading: false,
      error: action.error,
    });
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();

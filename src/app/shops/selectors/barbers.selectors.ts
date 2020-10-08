import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BarberState, selectAll } from '../reducers/barbers.reducers';

export const barbersFeatureSelector = createFeatureSelector<BarberState>('barbers');

export const getAllBarbers = createSelector(
  barbersFeatureSelector,
  selectAll
);

export const areBarbersLoaded = createSelector(
  barbersFeatureSelector,
  state => state.barbersLoaded
);


import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AvailabilitiesState, selectAll } from '../reducers/availabilities.reducers';

export const availabilitiesFeatureSelector = createFeatureSelector<AvailabilitiesState>('availabilities');

export const getAllAvailabilities= createSelector(
  availabilitiesFeatureSelector,
  selectAll
);

export const areAvailabilitiesLoaded = createSelector(
  availabilitiesFeatureSelector,
  state => state.availabilitiesLoaded
);
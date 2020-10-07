import { createAction, props } from '@ngrx/store';
import { Availability } from '../models/shop';

export const loadAvailabilities = createAction(
  '[Availabilities] Load items from server',
  props<{ startDate: string; endDate: string; shopId: string }>()
);

export const availabilitiesLoaded = createAction(
  '[Availabilities] Load success',
  props<{ Availabilities: Availability[] }>()
);

export const availabilitiesLoadFailed = createAction(
  '[Availabilities] Load failure',
  props<{ error: any }>()
);

export const AvailabilitiesTypes = {
  loadAvailabilities,
  availabilitiesLoaded,
  availabilitiesLoadFailed,
};

import { createAction, props } from '@ngrx/store';
import { Barber } from '../models';

export const loadBarbers = createAction('[Barbers] Load items from server');

export const barbersLoaded = createAction(
  '[Barbers] Load success',
  props<{ barbers: Barber[] }>()
);

export const barbersLoadFailed = createAction(
  '[Barbers] Load failure',
  props<{ error: any }>()
);

export const BarberActionTypes = {
  loadBarbers,
  barbersLoaded,
  barbersLoadFailed,
};

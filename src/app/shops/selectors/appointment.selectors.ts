

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppointmentState, selectAll } from '../reducers/appointment.reducers';

export const appointmentFeatureSelector = createFeatureSelector<AppointmentState>('appointments');

export const getAllAppointment = createSelector(
  appointmentFeatureSelector,
  selectAll
);

export const areAvailabilitiesLoaded = createSelector(
  appointmentFeatureSelector,
  state => state.appointmentLoaded
);


import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppointmentState, selectAll } from '../reducers/appointment.reducers';

export const appointmentFeatureSelector = createFeatureSelector<AppointmentState>('appointment');

export const getAllAppointment= createSelector(
  appointmentFeatureSelector,
  selectAll
);

export const areAppointmentLoaded = createSelector(
  appointmentFeatureSelector,
  state => state.appointmentLoaded
);
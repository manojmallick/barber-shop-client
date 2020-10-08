import { createAction, props } from '@ngrx/store';
import { Appointment } from '../models';

export const loadAppointment = createAction(
  '[Appointment] Load items from server',
  props<{  appointmentId: string }>()
);

export const appointmentLoaded = createAction(
  '[Appointment] Load success',
  props<{ appointment: Appointment}>()
);

export const appointmentLoadFailed = createAction(
  '[Appointment] Load failure',
  props<{ error: any }>()
);

export const createAppointment = createAction(
  '[Appointment] Create Appointment',
  props<{appointment: Appointment}>()
);

export const createAppointmentFailed = createAction(
  '[Appointment] Create Appointment failed',
  props<{ error: any }>()
);

export const AppointmentTypes = {
  createAppointment,
  createAppointmentFailed,
  appointmentLoadFailed,
  appointmentLoaded,
  loadAppointment
};

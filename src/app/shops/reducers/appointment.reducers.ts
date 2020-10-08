import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { AppointmentTypes } from '../actions/appointment.actions';
import { Appointment } from '../models';

export interface AppointmentState extends EntityState<Appointment> {
  appointmentLoaded: boolean;
  appointmentLoading: boolean;
  error: string;
}

export const adapter: EntityAdapter<Appointment> = createEntityAdapter<
Appointment
>();

export const initialState = adapter.getInitialState({
  appointmentLoaded: false,
  appointmentLoading: false,
  error: '',
});

export const appointmentLoadingReducer = createReducer(
  initialState,

  on(AppointmentTypes.appointmentLoaded, (state, action) => {
    return adapter.setOne( action.appointment,{
      ...state,
      appointmentLoaded: true,
      availabilitiesLoading: false
    });
  }),
  on(AppointmentTypes.loadAppointment, (state) => {
    return adapter.getInitialState({ ...state, appointmentLoading: true });
  }),
  on(AppointmentTypes.createAppointmentFailed, (state, action) => {
    return adapter.setAll(action.error, {
      ...state,
      appointmentLoaded: true,
      appointmentLoading: false,
      error: action.error,
    });
  }),
  on(AppointmentTypes.createAppointment, (state, action) => {
    return adapter.addOne(action.appointment, state);
  }),
  on(AppointmentTypes.createAppointmentFailed, (state, action) => {
    return adapter.addOne(action.error, {
      ...state,
      error: action.error,
    });
  }),

);

export const { selectAll, selectIds  } = adapter.getSelectors();


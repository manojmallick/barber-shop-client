import { ActionReducer, ActionReducerMap, combineReducers, compose } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze/src';
import { AppState } from 'src/app/core/reducers';
import { environment } from 'src/environments/environment';


import * as fromAppointment from './appointment.reducers';
import * as fromAvailabilities from './availabilities.reducers';
const reducers = {
    appointment: fromAppointment.appointmentLoadingReducer,
    availabilities: fromAvailabilities.AvailabilityReducer
  };
  

 export interface State {
    appointment: [fromAppointment.AppointmentState];
    availabilities: [fromAvailabilities.AvailabilitiesState];
 }





export const reducer: ActionReducerMap<AppState> = {
  appointment:fromAppointment.appointmentLoadingReducer,
};

 export const DATE_FORMAT = 'yyyy-MM-dd';

export interface Availability{
  id:string;
  timeSlot:string[];
  barberTimeSlot:BarberTimeSlot;
}

export interface BarberTimeSlot{
  [id:string]:string[];
}

export interface Shop {
  id: string;
  name?: string;
  address?: string;
  avatar?: string;
  phone?: string;
  email?: string;
  schedules?: Schedules[];
}

export interface Schedules{
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}


export interface Appointment{
  id?: string;
  startTime: string;
  bookingDate: string;
  customer:Customer;
  shop:Shop;
  services?:Service[];
  barber?:Barber;
}


export interface Customer{
  name: string;
  gender: string;
  email: string;
  mobile: string;
}

export interface Barber{
  id: string;
  name?: string;
  experience?: string;
  avatar?: string;
}

export interface Service{
  id: string;
  name: string;
  amount: string;
  type: string;
}

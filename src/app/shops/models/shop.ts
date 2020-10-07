
export interface Availability{
  id:string;
  timeSlot:string[];
}

export interface Shop {
  id: string;
  name: string;
  address: string;
  avatar: string;
  phone: string;
  email: string;
  schedules: Schedules[];
}

export interface Schedules{
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}


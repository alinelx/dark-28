type Time = string;
type TimeSchedules = string[];
type Duration = number;

import { Coordinates } from "./landmark";

export interface Routes {
  id: number;
  label: string;
  description: string;
  co?: boolean;
  mm?: boolean;
}

export interface Stops {
  type: Routes["id"];
  stop_seq: number;
  stop_name: string;
  origin: string;
  destination: string;
  cumulative_min_from_origin_est: Duration;
  weekday_first_approx: Time;
  weekday_last_approx: Time;
  weekday_times_approx: TimeSchedules;
  saturday_first_approx: Time;
  saturday_last_approx: Time;
  saturday_times_approx: TimeSchedules;
  sun_holiday_first_approx: Time;
  sun_holiday_last_approx: Time;
  sun_holiday_times_approx: TimeSchedules;
  lat: Coordinates["lat"];
  lng: Coordinates["lng"];
}
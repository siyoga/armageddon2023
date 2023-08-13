export type NearestAsteroids = {
  links: {
    next: string;
    prev: string;
    self: string;
  };
  element_count: number;
  near_earth_objects: {
    [date: string]: Asteroid[];
  };
};

export type Asteroid = {
  links: {
    self: string;
  };
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    [unit: string]: EstimatedDiameter;
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachData[];
  is_sentry_object: boolean;
};

type EstimatedDiameter = {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
};

type CloseApproachData = {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: {
    kilometers_per_second: string;
    kilometers_per_hour: string;
    miles_per_hour: string;
  };
  miss_distance: {
    astronomical: string;
    lunar: string;
    kilometers: string;
    miles: string;
  };
  orbiting_body: string;
};

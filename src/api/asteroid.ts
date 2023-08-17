import type { Asteroid, NearestAsteroids } from '@/types/Astreroid';
import api from './api';

export async function getNearestAsteroid(
  startDate: string,
  endDate: string
): Promise<NearestAsteroids | null> {
  try {
    const response = await api.get(`feed`, {
      searchParams: {
        start_date: startDate,
        end_date: endDate,
      },
    });

    return response.json<NearestAsteroids>();
  } catch (error) {
    return null;
  }
}

export async function getSpecificAsteroid(
  id: string
): Promise<Asteroid | null> {
  try {
    const response = await api.get(`neo/${id}`);

    return response.json<Asteroid>();
  } catch (error) {
    return null;
  }
}

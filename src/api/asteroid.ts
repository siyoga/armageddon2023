import type { NearestAsteroids } from '@/types/Astreroid';
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
        api_key: process.env.NASA_API_KEY as string,
      },
    });

    return response.json<NearestAsteroids>();
  } catch (error) {
    console.log(error);
    return null;
  }
}

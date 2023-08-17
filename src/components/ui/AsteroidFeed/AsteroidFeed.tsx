'use client';

import { getNearestAsteroid } from '@/api/asteroid';
import { Asteroid } from '@/types/Astreroid';
import { useCallback, useEffect, useState } from 'react';
import AsteroidCard from '../AsteroidCard/AsteroidCard';

export default function AsteroidFeed() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date(startDate).setDate(startDate.getDate() + 1))
  );

  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);

  const setDates = useCallback(() => {
    setStartDate(endDate);
    setEndDate(new Date(new Date(startDate).setDate(startDate.getDate() + 1)));
  }, [startDate, endDate]);

  const fetchAsteroids = useCallback(async () => {
    const asteroidsInfo = await getNearestAsteroid(
      convertDate(startDate),
      convertDate(endDate)
    );

    if (!asteroidsInfo) {
      return false;
    }

    Object.keys(asteroidsInfo.near_earth_objects).map((year) => {
      asteroidsInfo.near_earth_objects[year].map((asteroid) => {
        setAsteroids((prev) => [...prev, asteroid]);
      });
    });
  }, [startDate, endDate]);

  function convertDate(date: Date): string {
    return `${date.toLocaleString('default', {
      year: 'numeric',
    })}-${date.toLocaleString('default', {
      month: '2-digit',
    })}-${date.toLocaleString('default', { day: '2-digit' })}`;
  }

  useEffect(() => {
    fetchAsteroids();
  }, [startDate, fetchAsteroids]);

  return (
    <>
      {asteroids.map((asteroid, index) => (
        <AsteroidCard
          data={asteroid}
          key={asteroid.id}
          isLast={index === asteroids.length - 1}
          setDates={setDates}
          showBtn={true}
        />
      ))}
    </>
  );
}

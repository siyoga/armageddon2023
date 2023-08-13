import Image from 'next/image';
import styles from './page.module.css';
import { getNearestAsteroid } from '@/api/asteroid';
import AsteroidCard from '@/components/ui/AsteroidCard/AsteroidCard';
import Selector from '@/components/ui/Selector/Selector';
import { useEffect, useState } from 'react';
import { Asteroid, NearestAsteroids } from '@/types/Astreroid';
import AsteroidFeed from '@/components/ui/AsteroidFeed/AsteroidFeed';

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Ближайшие подлёты астероидов</h1>
      <Selector />
      <AsteroidFeed />
    </main>
  );
}

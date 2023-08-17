'use client';

import Image from 'next/image';

import type { Asteroid } from '@/types/Astreroid';

import styles from './AsteroidCard.module.css';
import doubleHeadedArrowImg from '@/assets/arrow.svg';
import asteroidSmallImg from '@/assets/asteroid_sm.svg';
import asteroidLargeImg from '@/assets/asteroid_lg.svg';
import store from '@/store/store';
import { observer } from 'mobx-react';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import OrderButton from '@/components/OrderButton/OrderButton';

type Props = {
  setDates?: () => void;
  isLast?: boolean;
  data: Asteroid;
  showBtn: boolean;
};

function AsteroidCard({ isLast, setDates, data, showBtn }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting && setDates !== undefined) {
        setDates();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
  }, [isLast]);

  const regex = /\((.*?)\)/;

  return (
    <div className={styles.asteroid} ref={cardRef}>
      <h1 className={styles.title}>
        {new Date(
          data.close_approach_data[0].close_approach_date.replace(/-/g, '/')
        ).toLocaleString('ru', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        })}
      </h1>
      <div className={styles.info}>
        <span className={styles.distance}>
          {store.measure === 'km' ? (
            <p>{`${Math.round(
              parseInt(data.close_approach_data[0].miss_distance.kilometers)
            )} км`}</p>
          ) : (
            <p>{`${Math.round(
              parseInt(data.close_approach_data[0].miss_distance.lunar)
            )} лунных орбит`}</p>
          )}

          <Image
            className={styles.arrow}
            alt="double-headed arrow"
            src={doubleHeadedArrowImg}
          />
        </span>
        <span className={styles.specs}>
          <Image
            alt="asteroid"
            className={styles.icon}
            src={
              Math.round(
                data.estimated_diameter['meters'].estimated_diameter_max
              ) > 100
                ? asteroidLargeImg
                : asteroidSmallImg
            }
          />
          <div>
            <h2>
              <Link href={`/${data.neo_reference_id}`}>
                {regex.exec(data.name)?.[1]}
              </Link>
            </h2>
            <p>{`Ø ${Math.round(
              data.estimated_diameter['meters'].estimated_diameter_max
            )} м`}</p>
          </div>
        </span>
      </div>
      <div className={styles.footer}>
        {showBtn ? <OrderButton newAsteroid={data} /> : null}
        {data.is_potentially_hazardous_asteroid && <p>⚠ Опасен</p>}
      </div>
    </div>
  );
}

export default observer(AsteroidCard);

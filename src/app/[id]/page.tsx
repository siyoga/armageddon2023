import { getSpecificAsteroid } from '@/api/asteroid';
import styles from './page.module.css';
import Image from 'next/image';
import asteroidLgImg from '@/assets/asteroidPic.png';
import OrderButton from '@/components/OrderButton/OrderButton';

type Props = {
  params: {
    id: string;
  };
};

export default async function Asteroid({ params }: Props) {
  const asteroid = await getSpecificAsteroid(params.id);

  return (
    <>
      <div className={styles.page}>
        {!asteroid ? (
          <h1>Немозможно найти данный астероид</h1>
        ) : (
          <>
            <Image
              alt="asteroid_img"
              src={asteroidLgImg}
              className={styles.imgLg}
            />
            <div className={styles.info}>
              <h1>{asteroid?.name}</h1>
              <span>
                <p>{`Диаметр: Ø${Math.round(
                  asteroid?.estimated_diameter['meters'].estimated_diameter_max
                )}`}</p>
                {asteroid.is_potentially_hazardous_asteroid && <p>⚠ Опасен</p>}
              </span>
              <p className={styles.speed}>{`Примерная скорость ${Math.round(
                parseInt(
                  asteroid.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                )
              )} км/ч`}</p>
              <OrderButton newAsteroid={asteroid} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

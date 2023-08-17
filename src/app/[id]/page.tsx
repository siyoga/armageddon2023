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

            <h1 className={styles.name}>{asteroid?.name}</h1>
            <div className={styles.info}>
              <p>{`Диаметр: Ø${Math.round(
                asteroid?.estimated_diameter['meters'].estimated_diameter_max
              )}`}</p>
              {asteroid.is_potentially_hazardous_asteroid && <p>⚠ Опасен</p>}
              <p>{`Примерная скорость ${Math.round(
                parseInt(
                  asteroid.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                )
              )} км/ч`}</p>
              <p>{`Расстояние до земли: ${Math.round(
                parseInt(
                  asteroid.close_approach_data[0].miss_distance.kilometers
                )
              )}`}</p>
              <p>{`Дата максимального сближения с землей: ${new Date(
                asteroid.close_approach_data[0].close_approach_date.replace(
                  /-/g,
                  '/'
                )
              ).toLocaleString('ru', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              })}`}</p>
            </div>
            <OrderButton newAsteroid={asteroid} />
          </>
        )}
      </div>
    </>
  );
}

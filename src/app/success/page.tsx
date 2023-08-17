'use client';

import styles from './page.module.css';
import store from '@/store/store';
import AsteroidCard from '@/components/ui/AsteroidCard/AsteroidCard';
import { observer } from 'mobx-react';

function Success() {
  return (
    <>
      <div className={styles.feed}>
        <h1 className={styles.title}>Заказ успешен!</h1>
        {store.cart.map((asteroid) => (
          <AsteroidCard data={asteroid} showBtn={false} key={asteroid.id} />
        ))}
      </div>
      <footer className={styles.footer}>© Все права и планета защищены</footer>
    </>
  );
}

export default observer(Success);

'use client';

import { observer } from 'mobx-react';
import styles from './Cart.module.css';
import store from '@/store/store';
import { useRouter } from 'next/navigation';

function Cart() {
  const router = useRouter();

  return (
    <div className={styles.cart}>
      <span>
        <h1>Корзина</h1>
        <p>
          {store.cart.length === 0 ? 'Пусто' : `${store.cart.length} астероида`}
        </p>
      </span>
      <button
        disabled={store.cart.length === 0}
        onClick={() => {
          router.push('/success');
        }}
      >
        Отправить
      </button>
    </div>
  );
}

export default observer(Cart);

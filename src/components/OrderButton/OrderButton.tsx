'use client';
import store from '@/store/store';
import { Asteroid } from '@/types/Astreroid';
import styles from './OrderButton.module.css';
import { useEffect, useState } from 'react';

type Props = {
  newAsteroid: Asteroid;
};

export default function OrderButton({ newAsteroid }: Props) {
  const [text, setText] = useState<'В корзине' | 'Заказать'>(
    store.cart.findIndex((asteroid) => asteroid.id === newAsteroid.id) === -1
      ? 'Заказать'
      : 'В корзине'
  );

  return (
    <button
      className={styles.button}
      onClick={() => {
        if (
          store.cart.findIndex((asteroid) => asteroid.id === newAsteroid.id) ===
          -1
        ) {
          store.addToCart(newAsteroid);
          setText('В корзине');
        } else {
          store.removeFromCart(newAsteroid);
          setText('Заказать');
        }
      }}
    >
      {text}
    </button>
  );
}

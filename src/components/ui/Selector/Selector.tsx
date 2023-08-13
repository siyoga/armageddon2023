'use client';

import { observer } from 'mobx-react';

import styles from './Selector.module.css';
import store from '@/store/store';

function Selector() {
  return (
    <span className={styles.selector}>
      <button
        className={store.measure === 'km' ? styles.active : styles.disabled}
        onClick={() => {
          store.changeMeasure('km');
        }}
      >
        в километрах
      </button>
      <p>|</p>
      <button
        className={store.measure === 'lunar' ? styles.active : styles.disabled}
        onClick={() => {
          store.changeMeasure('lunar');
        }}
      >
        в лунных орбитах
      </button>
    </span>
  );
}

export default observer(Selector);

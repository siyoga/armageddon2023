'use client';

import type { ComponentProps } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends Omit<ComponentProps<'button'>, 'className'> {}

export default function Button({ ...props }: ButtonProps) {
  return <button {...props} className={styles.button} />;
}

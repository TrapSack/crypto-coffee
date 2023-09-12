/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useContext, useEffect } from 'react';
import { Cup, CupContext } from '@entities/cup';

import styles from './styles.module.scss';

export const CreateCoffeeCup = () => {
  const { initialize } = useContext(CupContext);

  useEffect(() => {
    initialize(5);
  }, []);

  return (
    <div className={styles.cupWrapper}>
      <Cup />
    </div>
  );
};

/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useContext,  useEffect } from 'react';
import { CupControls } from '@src/features/cup-controls';
import { Cup, CupContext } from '@entities/cup';

import styles from './styles.module.scss';

export const CreateCoffeeCup = () => {
  const { isInit, initialize } = useContext(CupContext);

  console.log(isInit)

  useEffect(()=> {
    initialize(5)
  },[])

  if (!isInit) {
    return <div>Loading..</div>;
  }

  return (
    <div className={styles.cupWrapper}>
      <Cup />
      <CupControls />
    </div>
  );
};

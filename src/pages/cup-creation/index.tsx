'use client';

import { CreateCoffeeCup } from '@widgets/create-coffee-cup';
import { CupTopingsAside } from '@widgets/cup-topings-aside';
import { CupVariantsAside } from '@widgets/cup-variants-aside';
import styles from './styles.module.scss';

export const CupCreationPage = () => {
  return (
    <main className={styles.main}>
      <CupVariantsAside />
      <CreateCoffeeCup />
      <CupTopingsAside />
    </main>
  );
};

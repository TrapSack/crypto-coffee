'use client';

import classNames from 'classnames';
import { useState } from 'react';
import { CupVariant } from '@src/features/cup-variant';
import { Arrow } from '@shared/assets';
import { WithLoadingErrorData } from '@shared/hoc';
import { Aside } from '@shared/ui/aside';
import { List } from '@src/shared/ui';
import { CupVariantType, getCupVariants } from '../data';
import styles from './styles.module.scss';

type MainClass = 'open' | 'close';

const ANIMATION_DURATION = 1000;

export const CupVariantsAside = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mainClass, setMainClass] = useState<MainClass>('open');

  const handleCloseMainVariant = () => {
    setMainClass('close');

    setTimeout(() => {
      setIsOpen(false);
    }, ANIMATION_DURATION);
  };

  const handleOpenMainVariant = () => {
    setMainClass('open');
    setIsOpen(true);
  };

  if (!isOpen)
    return (
      <Aside styleName={styles.transparent} onClick={handleOpenMainVariant}>
        <Arrow className={styles.arrowRight} />
      </Aside>
    );

  return (
    <Aside styleName={classNames(styles.main, styles[mainClass])}>
      <div className={styles.title}>
        <div className={styles.top}>
          <div>Make a coffee</div> <Arrow onClick={handleCloseMainVariant} />
        </div>
        <div className={styles.bottom}>
          <div>You can add topings from list</div>
          <div>Or you can choose from our and classic variants</div>
        </div>
      </div>
      <CupVariantsApiList />
    </Aside>
  );
};

const CupVariantsList = ({
  data = [],
  loading,
  error,
}: {
  data?: CupVariantType[];
  loading?: boolean;
  error?: string;
}) => {
  if (loading) return <div>LOADING...</div>;

  if (error) return <div>{error}r</div>;

  if (!loading && !data.length) return <div>No cup variants available</div>;

  return (
    <List title="Variants">
      {data.map((variant) => (
        <CupVariant key={variant.id} />
      ))}
    </List>
  );
};

const CupVariantsApiList = WithLoadingErrorData(
  CupVariantsList,
  getCupVariants
);

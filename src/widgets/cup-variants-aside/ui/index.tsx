'use client';

import classNames from 'classnames';
import { useState } from 'react';
import { CupVariantsList } from '@features/cup-variants-list';
import { ArrowLeft } from '@shared/assets';
import { Aside } from '@shared/ui/aside';

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

  if (!isOpen) return null;

  return (
    <Aside styleName={classNames(styles.main, styles[mainClass])}>
      <div className={styles.title}>
        <div className={styles.top}>
          <div>Make a coffee</div>{' '}
          <ArrowLeft onClick={handleCloseMainVariant} />
        </div>
        <div className={styles.bottom}>
          <div>You can add topings from list</div>
          <div>Or you can choose from our and classic variants</div>
        </div>
      </div>
      <CupVariantsList />
    </Aside>
  );
};

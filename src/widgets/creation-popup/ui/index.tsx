'use client';

import classNames from 'classnames';
import { useState, useContext } from 'react';
import { CupContext } from '@entities/cup';
import { routes } from '@src/entities/routes';
import { Cross } from '@shared/assets';
import { useExcludingRoutes } from '@shared/hooks';
import { List, Button } from '@shared/ui';
import styles from './styles.module.scss';

const TRANSITION_TIME = 500;

export const CreationPopup = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenButton, setIsOpenButton] = useState(true);

  const { isInitialized, getCurrentAmount, coffeeStack, clear } =
    useContext(CupContext);

  const show = useExcludingRoutes(routes.createCup);


  if (!isInitialized || !getCurrentAmount() || !show) return null;

  const handleCloseModal = () => {
    setIsOpenModal(false);

    setTimeout(() => {
      setIsOpenButton(true);
    }, TRANSITION_TIME);
  };

  const handleOpenModal = () => {
    setIsOpenButton(false);
    setIsOpenModal(true);
  };

  return (
    <div className={styles.container}>
      {isOpenButton && (
        <button onClick={handleOpenModal} className={styles.expand}>
          Click
        </button>
      )}
      <div className={classNames(styles.modal, { [styles.open]: isOpenModal })}>
        <div className={styles.header}>
          <div> Your coffee cup</div>
          <div onClick={handleCloseModal}>
            <Cross />
          </div>
        </div>
        <List className={styles.list}>
          {coffeeStack.map((typeItem) => (
            <div key={typeItem.type} className={styles.stackItem}>
              <div>{typeItem.type}: </div>
              <div>{typeItem.amount}</div>
            </div>
          ))}
        </List>
        <div className={styles.btnContainer}>
          <Button buttonStyle="orange" onClick={clear}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

'use client';

import classNames from 'classnames';

import { useContext, useMemo, useRef } from 'react';
import { CupContext } from '..';
import styles from './styles.module.scss';

export function Cup() {
  const { coffeeStack, capacity, getCurrentAmount } = useContext(CupContext);

  const stackRef = useRef<HTMLDivElement>(null);

  const coffeeStackWithPrecent = useMemo(
    () =>
      coffeeStack.map((stackItem) => ({
        type: stackItem.type,
        percent: `${Math.ceil((stackItem.amount / getCurrentAmount()) * 100)}%`,
      })),
    [coffeeStack, getCurrentAmount]
  );

  const stackHeight = (getCurrentAmount() / capacity) * 100;

  // console.log(coffeeStackWithPrecent);

  return (
    <div className={styles.cup}>
      <div className={styles.cap}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
      <div className={styles.stackWrapper}>
        <div
          className={styles.stack}
          ref={stackRef}
          style={{
            height: `${stackHeight}%`,
          }}
        >
          {coffeeStackWithPrecent.map((stackItem) => (
            <div
              className={classNames(styles.layer, styles[stackItem.type])}
              key={stackItem.type}
              style={{
                height: stackItem.percent,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.borders}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

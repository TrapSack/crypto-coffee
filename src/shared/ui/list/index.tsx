import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export const List = ({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) => {
  return (
    <div className={styles.listWrapper}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.list}>{children}</div>
    </div>
  );
};

import classNames from 'classnames';
import { PropsWithChildren, ReactNode } from 'react';

import styles from './styles.module.scss';

export const List = ({
  children,
  title,
  className,
  gap = 15,
}: PropsWithChildren<{
  title?: ReactNode;
  className?: string;
  gap?: string | number;
}>) => {
  const titleToShow =
    typeof title === 'string' ? (
      <div className={styles.title}>{title}</div>
    ) : (
      title
    );

  return (
    <div className={classNames(styles.listWrapper, className)}>
      {titleToShow}
      <div className={styles.list} style={{ gap }}>
        {children}
      </div>
    </div>
  );
};

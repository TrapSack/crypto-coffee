import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type AsideProps = {
  styleName?: string;
};

export const Aside = ({
  styleName,
  children,
}: PropsWithChildren<AsideProps>) => {
  return (
    <aside className={classNames(styles.aside, styleName)}>{children}</aside>
  );
};

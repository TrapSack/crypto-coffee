import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type AsideProps = {
  styleName?: string;
};

export const Aside = ({
  styleName,
  children,
  ...restProps
}: PropsWithChildren<
  AsideProps & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
>) => {
  return (
    <aside className={classNames(styles.aside, styleName)} {...restProps}>
      {children}
    </aside>
  );
};

import classNames from 'classnames';
import Link from 'next/link';
import { menuData } from '../data';
import styles from './styles.module.scss';

export const HeaderMenu = () => {
  return (
    <menu className={styles.headerMenu}>
      {menuData.map((dataItem) => (
        <Link
          key={dataItem.title}
          href={dataItem.link}
          className={classNames(styles.menuItem, {
            [styles.special]: dataItem.type === 'orange',
          })}
        >
          <div>{dataItem.title}</div>
        </Link>
      ))}
    </menu>
  );
};

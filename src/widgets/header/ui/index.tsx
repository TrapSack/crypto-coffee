import { HeaderLogo } from '@src/features/header-logo';
import { HeaderMenu } from '@src/features/header-menu';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderMenu />
      <div></div>
    </header>
  );
};

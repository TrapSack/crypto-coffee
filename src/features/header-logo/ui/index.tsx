import classNames from 'classnames';
import Image from 'next/image';
import { HeaderLogo as HeaderLogoImage } from '@shared/assets';

import styles from './styles.module.scss';

export const HeaderLogo = () => {
  return (
    <div className={classNames(styles.logo, 'header-container')}>
      <Image src={HeaderLogoImage} alt="Header" height={30} />
      Crypto Coffee
    </div>
  );
};

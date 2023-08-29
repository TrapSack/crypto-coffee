import Image from 'next/image';
import { LoadingGif } from '@shared/assets';
import styles from './styles.module.scss';

export const LoaderComponent = () => {  



  
  return (
    <div className={styles.loading}>
      <Image src={LoadingGif} alt="loading" />
    </div>
  );
};

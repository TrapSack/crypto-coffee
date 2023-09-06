import { CupVariant } from '@src/entities/cup-variant';
import styles from './styles.module.scss';

export const CupVariantsList = () => {
  return (
    <div>
      <div className={styles.title}>Variants</div>
      <div className={styles.variants}>
        <CupVariant />
        <CupVariant />
        <CupVariant />
        <CupVariant />
        <CupVariant />
      </div>
    </div>
  );
};

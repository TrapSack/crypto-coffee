import { CupVariant } from '@src/entities/cup-variant';
import { WithLoadingErrorData } from '@shared/hoc';
import { CupVariantType, getCupVariants } from '../data';
import styles from './styles.module.scss';

const CupVariantsList = ({
  data = [],
  loading,
  error,
}: {
  data?: CupVariantType[];
  loading?: boolean;
  error?: string;
}) => {
  if (loading) return <div>LOADING...</div>;
  
  if (error) return <div>{error}r</div>;

  if (!loading && !data.length) return <div>No cup variants available</div>;


  return (
    <div>
      <div className={styles.title}>Variants</div>
      <div className={styles.variants}>
        {data.map((variant) => (
          <CupVariant key={variant.id} />
        ))}
      </div>
    </div>
  );
};

export default WithLoadingErrorData(CupVariantsList, getCupVariants);

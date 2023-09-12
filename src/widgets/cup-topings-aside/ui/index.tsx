import { useContext } from 'react';
import { TopingVariant } from '@src/features/toping-variant';
import { CupContext } from '@src/entities/cup';
import { Aside, List } from '@src/shared/ui';

import styles from './styles.module.scss';

export const CupTopingsAside = () => {
  return (
    <Aside styleName={styles.main}>
      <div className={styles.title}>
        <div className={styles.top}>Make a coffee</div>
        <div className={styles.bottom}>
          <div>You can add topings from list</div>
          <div>Or you can choose from our and classic variants</div>
        </div>
      </div>
      <CupTopingsList />
    </Aside>
  );
};

const CupTopingsList = () => {
  const { topingTypes, isInitialized, } = useContext(CupContext);

  if (!isInitialized) return <div>Loading...</div>;

  return (
    <List title="Variants">
      {topingTypes.map((variant) => (
        <TopingVariant
          key={variant.type}
          type={variant.type}
          color={variant.color}
        />
      ))}
    </List>
  );
};

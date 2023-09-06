import { Aside } from '@src/shared/ui/aside';

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
    </Aside>
  );
};

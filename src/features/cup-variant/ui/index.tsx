import styles from './styles.module.scss';

export const CupVariant = () => {
  return (
    <div className={styles.variant}>
      <div className={styles.picture}>
        <div className={styles.red}></div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <div className={styles.name}>Cappucino</div>
          <div className={styles.expand}>Click here to see composition</div>
        </div>
        <button className={styles.button}>+</button>
      </div>
    </div>
  );
};

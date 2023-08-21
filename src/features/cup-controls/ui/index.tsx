import { useContext } from 'react';
import { CoffeStackItemType, CupContext } from '@src/entities/cup';
import { Button } from '@src/shared/ui';
import styles from './styles.module.scss';

export const CupControls = () => {
  const { add, topingTypes, remove } = useContext(CupContext);

  const addToping = (type: CoffeStackItemType) => {
    add(type, 1);
  };

  const removeToping = (type: CoffeStackItemType) => {
    remove(type, 1);
  };

  const removeAllToping = (type: CoffeStackItemType) => {
    remove(type);
  };

  return (
    <div className={styles.cupControls}>
      {topingTypes.length ? (
        topingTypes.map((topingType) => (
          <div className={styles.topingControl} key={topingType.type}>
            <Button
              onClick={() => addToping(topingType.type as CoffeStackItemType)}
            >
              Add 1 {topingType.type}
            </Button>
            <Button
              onClick={() =>
                removeToping(topingType.type as CoffeStackItemType)
              }
            >
              Remove 1 {topingType.type}
            </Button>
            <Button
              onClick={() =>
                removeAllToping(topingType.type as CoffeStackItemType)
              }
            >
              Remove all {topingType.type}
            </Button>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

import classNames from 'classnames';
import {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { CoffeStackItemType } from '@src/entities/cup';
import { useTopingVariant } from '../hooks';
import styles from './styles.module.scss';

type TopingVariantProps = {
  type: CoffeStackItemType;
  color?: string;
};

export const TopingVariant = ({ color, type }: TopingVariantProps) => {
  const [virtualValue, setVirtualValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { addToType, removeFromType, findInStack, setTypeAmount } =
    useTopingVariant(type);

  const stackItem = findInStack();

  const typeAmount = stackItem ? stackItem.amount : 0;

  useEffect(() => {
    console.log('effect')
    setVirtualValue(typeAmount.toString());
  }, [typeAmount]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setVirtualValue(e.target.value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputRef.current) {
      setTypeAmount(Number(inputRef.current.value));
    }
  };

  return (
    <div className={styles.variant}>
      <button
        className={classNames(styles.button, styles.border)}
        onClick={() => removeFromType()}
      >
        -
      </button>
      <div className={styles.center}>
        <div>{type}</div>
        <div>
          <input
            ref={inputRef}
            type="number"
            value={virtualValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <button
        className={classNames(styles.button, styles.full)}
        onClick={() => addToType()}
      >
        +
      </button>
    </div>
  );
};

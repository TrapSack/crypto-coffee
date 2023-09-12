import { useContext } from 'react';
import { CoffeStackItemType, CupContext } from '@src/entities/cup';

const DEFAULT_CHANGE_VALUE = 1;

export const useTopingVariant = (type: CoffeStackItemType) => {
  const { add, remove, coffeeStack, isInitialized, setAmount } =
    useContext(CupContext);

  if (!isInitialized) console.warn('Cup is not initialized, use init() method');

  const addToType = (amount?: number) =>
    add(type, amount || DEFAULT_CHANGE_VALUE);

  const removeFromType = (amount?: number) =>
    remove(type, amount || DEFAULT_CHANGE_VALUE);

  const findInStack = () =>
    coffeeStack.find((stackItem) => stackItem.type === type);

  const setTypeAmount = (amount: number) => {
    setAmount(type, amount);
  };

  return { addToType, removeFromType, findInStack, setTypeAmount };
};

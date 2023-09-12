'use client';

import { PropsWithChildren, createContext } from 'react';
import { useCup } from '..';

type UseCupReturnType = ReturnType<typeof useCup>;

export const CupContext = createContext<UseCupReturnType>({
  coffeeStack: [],
  error: null,
  isInitialized: false,
  topingTypes: [],
  capacity: 0,
  add: () => null,
  clear: () => null,
  remove: () => null,
  initialize: () => null,
  changeOrder: () => null,
  getCurrentAmount: () => NaN,
  setAmount: () => null,
});

export const CupContextProvider = ({ children }: PropsWithChildren) => {
  const {
    add,
    changeOrder,
    coffeeStack,
    error,
    getCurrentAmount,
    isInitialized,
    remove,
    initialize,
    capacity,
    clear,
    topingTypes,
    setAmount
  } = useCup();

  return (
    <CupContext.Provider
      value={{
        add,
        remove,
        setAmount,
        topingTypes,
        changeOrder,
        coffeeStack,
        error,
        getCurrentAmount,
        isInitialized,
        initialize,
        capacity,
        clear,
      }}
    >
      {children}
    </CupContext.Provider>
  );
};

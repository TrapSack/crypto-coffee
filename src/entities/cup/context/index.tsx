'use client';

import { PropsWithChildren, createContext } from 'react';
import { useCup } from '..';

type UseCupReturnType = ReturnType<typeof useCup>;

export const CupContext = createContext<UseCupReturnType>({
  coffeeStack: [],
  error: null,
  isInit: false,
  topingTypes: [],
  capacity: 0,
  add: () => null,
  clear: () => null,
  remove: () => null,
  initialize: () => null,
  changeOrder: () => null,
  getCurrentAmount: () => NaN,
});

export const CupContextProvider = ({ children }: PropsWithChildren) => {
  const {
    add,
    changeOrder,
    coffeeStack,
    error,
    getCurrentAmount,
    isInit,
    remove,
    initialize,
    capacity,
    clear,
    topingTypes,
  } = useCup();

  return (
    <CupContext.Provider
      value={{
        add,
        topingTypes,
        changeOrder,
        coffeeStack,
        error,
        getCurrentAmount,
        isInit,
        remove,
        initialize,
        capacity,
        clear,
      }}
    >
      {children}
    </CupContext.Provider>
  );
};

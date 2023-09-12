'use client';

/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { swapArrayItems } from '@src/shared/lib';
import { TopingType, topingTypes as externalTopingTypes } from '../data';

export type CoffeStackItemType = 'milk' | 'espresso' | 'cream';

export type CoffeeStackItem = {
  type: CoffeStackItemType;
  amount: number;
  color?: string;
};

export enum CUP_ERROR {
  FULL = 'Cup is full',
  TYPE_DOESNT_EXIST = 'Toping type doesn`t exist',
  WRONG_FORMAT = 'Amount should be number type',
}

export const useCup = () => {
  const [capacity, setCapacity] = useState(0);
  const [coffeeStack, setCoffeeStack] = useState<CoffeeStackItem[]>([]);
  const [topingTypes, setTopingTypes] = useState<TopingType[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<CUP_ERROR | null>(null);

  const isCupFull = (amount?: number) =>
    getCurrentAmount() + (amount ?? 0) > capacity;

  const calculateAmountToFillCup = () => capacity - getCurrentAmount();

  const fetchTopingTypes = () => {
    const prom = new Promise<TopingType[]>((resolve) => {
      setTimeout(() => {
        resolve(externalTopingTypes);
      }, 3000);
    });

    return Promise.resolve(prom);
  };

  const findIndexInTopingTypes = (type: CoffeStackItemType) =>
    topingTypes.findIndex((topingType) => topingType.type === type);

  const add = (type: CoffeStackItemType, amount?: number) => {
    const amountToAdd = amount || calculateAmountToFillCup();

    if (isCupFull(amountToAdd)) {
      setError(CUP_ERROR.FULL);
      return;
    }

    if (!~findIndexInTopingTypes(type)) {
      setError(CUP_ERROR.TYPE_DOESNT_EXIST);
      return;
    }

    const foundStackIndex = coffeeStack.findIndex((si) => si.type === type);

    const coffeeStackClone = structuredClone(coffeeStack);

    if (~foundStackIndex) {
      coffeeStackClone[foundStackIndex].amount++;
    } else {
      const topingColor =
        topingTypes.find((topingType) => topingType.type === type)?.color ??
        '#fff';

      coffeeStackClone.push({ type, amount: amountToAdd, color: topingColor });
    }

    setCoffeeStack(coffeeStackClone);
  };

  const clear = () => setCoffeeStack([]);

  const remove = (type: CoffeStackItemType, amount?: number) => {
    const typeToRemoveIndex = coffeeStack.findIndex((c) => c.type === type);

    if (!~typeToRemoveIndex) {
      setError(CUP_ERROR.TYPE_DOESNT_EXIST);
      return;
    }

    const coffeeStackClone = structuredClone(coffeeStack);

    if (!amount || coffeeStackClone[typeToRemoveIndex].amount - amount <= 0) {
      coffeeStackClone.splice(typeToRemoveIndex, 1);
    } else {
      coffeeStackClone[typeToRemoveIndex].amount -= amount;
    }

    setCoffeeStack(coffeeStackClone);
  };

  const setAmount = (type: CoffeStackItemType, amount: number) => {
    if (isNaN(amount)) {
      setError(CUP_ERROR.WRONG_FORMAT);
      return;
    }

    const typeToSetIndex = coffeeStack.findIndex((c) => c.type === type);

    const coffeeStackClone = structuredClone(coffeeStack);

    const amountToFill = calculateAmountToFillCup();

    if (!~typeToSetIndex) {
      coffeeStackClone.push({
        type,
        amount: amount > amountToFill ? amountToFill : amount,
      });
    } else {
      if (
        amount + getCurrentAmount() > capacity &&
        amount > coffeeStackClone[typeToSetIndex].amount
      ) {
        coffeeStackClone[typeToSetIndex].amount += amountToFill;
      } else {
        coffeeStackClone[typeToSetIndex].amount = amount;
      }
    }

    setCoffeeStack(coffeeStackClone);
  };

  const getCurrentAmount = () =>
    coffeeStack.reduce((acc, curr) => acc + curr.amount, 0);

  const changeOrder = (
    type: CoffeStackItemType,
    order: keyof typeof coffeeStack
  ) => {
    const typeToSwapIndex = coffeeStack.findIndex((si) => si.type === type);

    const coffeeStackClone = structuredClone(coffeeStack);

    if (~typeToSwapIndex) {
      swapArrayItems(coffeeStackClone, typeToSwapIndex, order);
    }

    setCoffeeStack(coffeeStackClone);
  };

  const initialize = (
    initCapacity: number = 0,
    initCoffeeStack: CoffeeStackItem[] = []
  ) => {
    setCapacity(initCapacity);
    setCoffeeStack(initCoffeeStack);

    console.log('initializing');

    if (!topingTypes.length) {
      fetchTopingTypes() // This changes to api request
        .then((tt) => {
          setTopingTypes(tt);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => setIsInitialized(true));
    }
  };


  return {
    add,
    remove,
    setAmount,
    changeOrder,
    getCurrentAmount,
    coffeeStack,
    isInitialized,
    error,
    capacity,
    initialize,
    clear,
    topingTypes,
  };
};

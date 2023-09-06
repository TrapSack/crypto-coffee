import { CoffeeStackItem } from '@src/entities/cup';

type CupVariant = {
  name: string;
  id: string;
  topings: CoffeeStackItem[];
};

const cupVariants: CupVariant[] = [
  {
    name: 'Cappucino',
    id: 'cup-1',
    topings: [
      { type: 'milk', amount: 2 },
      { type: 'cream', amount: 2 },
      { type: 'espresso', amount: 1 },
    ],
  },
  {
    name: 'Cappucino',
    id: 'cup-4',
    topings: [
      { type: 'milk', amount: 2 },
      { type: 'cream', amount: 2 },
      { type: 'espresso', amount: 1 },
    ],
  },
  {
    name: 'Cappucino',
    id: 'cup-3',
    topings: [
      { type: 'milk', amount: 2 },
      { type: 'cream', amount: 2 },
      { type: 'espresso', amount: 1 },
    ],
  },
];

export const getCupVariants = async () => {
  const variantsPromise = new Promise((res) => {
    setTimeout(() => {
      res(cupVariants);
    }, 500);
  });

  return variantsPromise.then((res) => res);
};

import { CoffeeStackItem } from '@src/entities/cup';

export type CupVariantType = {
  id: string;
  name: string;
  topings: CoffeeStackItem[];
};

const cupVariants: CupVariantType[] = [
  {
    id: 'c1',
    name: 'Cappuccino',
    topings: [
      { amount: 1, type: 'espresso', color: '#aeaeae' },
      { amount: 2, type: 'milk', color: '#03e32f' },
      { amount: 2, type: 'cream', color: '#774E11' },
    ],
  },
  {
    id: 'c2',
    name: 'Cappuccino',
    topings: [
      { amount: 1, type: 'espresso', color: '#aeaeae' },
      { amount: 2, type: 'milk', color: '#03e32f' },
      { amount: 2, type: 'cream', color: '#774E11' },
    ],
  },
  {
    id: 'c3',
    name: 'Cappuccino',
    topings: [
      { amount: 1, type: 'espresso', color: '#aeaeae' },
      { amount: 2, type: 'milk', color: '#03e32f' },
      { amount: 2, type: 'cream', color: '#774E11' },
    ],
  },
];

export const getCupVariants = async () => {
  const pr = new Promise<CupVariantType[]>((res) => {
    setTimeout(() => {
      res(cupVariants);
    }, 500);
  });

  return pr.then((res) => res);
};

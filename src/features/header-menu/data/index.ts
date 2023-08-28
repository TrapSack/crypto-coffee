import { routes } from '@src/entities/routes';

export type MenuDataItem = {
  title: string;
  link: string;
  type?: 'orange';
};

export const menuData: MenuDataItem[] = [
  {
    link: routes.home,
    title: 'Home',
  },
  {
    link: routes.home,
    title: 'Create a cup',
    type: 'orange',
  },
  {
    link: routes.pricing,
    title: 'Pricing',
  },
  {
    link: routes.about,
    title: 'About',
  },
];

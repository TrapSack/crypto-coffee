'use client';

import { usePathname } from 'next/navigation';
import { useState, useLayoutEffect } from 'react';

export const useExcludingRoutes = (routes: string | string[]) => {
  const [isShown, setIsShown] = useState(false);
  const route = usePathname();

  useLayoutEffect(() => {
    if (!route) return;

    const routeSplit = route.split('/');

    if (
      (typeof routes !== 'string' &&
        routes.some((r) => routeSplit[1].includes(r))) ||
      (typeof routes === 'string' &&
        (routeSplit[1].includes(routes) || route.includes(routes)))
    ) {
      setIsShown(false);

      return;
    }

    setIsShown(true);
  }, [route, routes]);

  return isShown;
};

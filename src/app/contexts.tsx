import { PropsWithChildren } from 'react';
import { CupContextProvider } from '@src/entities/cup';

export const ContextsProvider = ({ children }: PropsWithChildren) => {

  return <CupContextProvider>{children}</CupContextProvider>;
};

import '@shared/styles';
import { Suspense } from 'react';
import { CreationPopup } from '@src/widgets/creation-popup';
import { Header } from '@src/widgets/header';
import { ContextsProvider } from './contexts';
import Loading from './loading';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextsProvider>
      <html lang="en">
        <body>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <CreationPopup />
        </body>
      </html>
    </ContextsProvider>
  );
}

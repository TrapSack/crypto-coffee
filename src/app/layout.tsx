import '@shared/styles';
import { Suspense } from 'react';
import { Header } from '@src/widgets/header';
import { ContextsProvider } from './contexts';
import Loading from './loading';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ContextsProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ContextsProvider>
      </body>
    </html>
  );
}

import '@shared/styles';
import { Suspense } from 'react';
import { Header } from '@src/widgets/header';
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
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}

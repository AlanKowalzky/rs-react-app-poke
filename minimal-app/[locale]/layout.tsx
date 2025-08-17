import { ReactNode } from 'react';

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}
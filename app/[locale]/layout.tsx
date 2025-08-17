import { ReactNode } from 'react';

export default async function RootLayout({
  children,
  params, // Przyjmujemy cały obiekt params
}: {
  children: ReactNode;
  // Nadal oczekujemy obiektu params z polem locale typu string w typowaniu
  params: { locale: string };
}) { 
  // Jawne odczytanie locale
  const locale = params.locale;

  return (
    <html lang={locale}>
      <body>
 {children}
      </body>
    </html>
  );
}
import type { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Ten layout jest celowo minimalistyczny.
  // Opakowuje on segmenty językowe [locale] i musi zawierać <html> i <body>.
  // Nie umieszczamy tutaj żadnych providerów zależnych od 'locale'.
  // `suppressHydrationWarning` jest często przydatny przy ThemeProvider z next-themes.
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

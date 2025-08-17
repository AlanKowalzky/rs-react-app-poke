// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Pokemon App (Migracja)",
  description: "A Next.js app to browse Pokemon (Migration in progress)",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>; // 👈 kluczowa zmiana
}) {
  const { locale } = await params; // 👈 trzeba awaitować params
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <header style={{ backgroundColor: "lightgray", padding: "10px" }}>
            <h1>Nagłówek (Placeholder)</h1>
            <p>Obecny język: {locale}</p>
          </header>
          <main style={{ padding: "20px" }}>{children}</main>
          <footer
            style={{
              backgroundColor: "lightgray",
              padding: "10px",
              marginTop: "20px",
            }}
          >
            <p>Stopka (Placeholder)</p>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

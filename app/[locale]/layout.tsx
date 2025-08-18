// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { StoreProvider } from "@/StoreProvider";

export const metadata: Metadata = {
  title: "Pokemon App (Migracja)",
  description: "A Next.js app to browse Pokemon (Migration in progress)",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // 👇 poprawnie await params
  const { locale } = await params;

  // Pobieramy tłumaczenia
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <StoreProvider>
            <header
              style={{
                backgroundColor: "lightgray",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1>Nagłówek (Placeholder)</h1>
              <ThemeSwitcher />
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
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

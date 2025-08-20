// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { useRouter } from 'next-intl/client';
import { useMessages } from 'next-intl';
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
            <Navigation />
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

const Navigation: React.FC = () => {
  const router = useRouter();
  const m = useMessages();
  const messages = m as any; // Rzutowanie na any dla uproszczenia

  return (
    <header
      style={{
        backgroundColor: "lightgray",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>{messages.LocaleLayout.title}</h1>
      <nav>
        <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
          <li>
            <a 
              href={router.localePath('/')} 
              onClick={(e) => { e.preventDefault(); router.push('/'); }}
              style={{ color: 'blue', textDecoration: 'underline' }}
            >
              {messages.Navigation.home}
            </a>
          </li>
          <li>
             <a 
              href={router.localePath('/about')} 
              onClick={(e) => { e.preventDefault(); router.push('/about'); }}
              style={{ color: 'blue', textDecoration: 'underline' }}
            >
              {messages.Navigation.about}
            </a>
          </li>
        </ul>
      </nav>
      <ThemeSwitcher />
    </header>
  );
};

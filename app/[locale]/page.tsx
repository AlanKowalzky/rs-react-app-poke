// app/[locale]/page.tsx
import { notFound } from "next/navigation";

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  const supportedLocales = ["en", "pl"];
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  return (
    <main>
      <h1>Home page for locale: {locale}</h1>
      <p>This is a working page in Next.js 15 + next-intl 3</p>
    </main>
  );
}

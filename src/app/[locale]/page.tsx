import { redirect } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

// Ta strona będzie teraz odpowiedzialna za przekierowanie
// z /en lub /pl do odpowiedniej strony wyszukiwania.
export default function RootPage({ params: { locale } }: { params: { locale: string } }) {
  console.log(`[page.tsx] Renderowanie strony głównej dla locale: "${locale}". Przekierowuję...`);

  unstable_setRequestLocale(locale);
  redirect(`/${locale}/search`);
}

import { redirect } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

// Ta strona będzie teraz odpowiedzialna za przekierowanie
// z /en lub /pl do odpowiedniej strony wyszukiwania.
export default function RootPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  redirect(`/${locale}/search`);
}

// app/page.tsx
// To jest Server Component domyślnie

import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n'; // Importujemy defaultLocale

export default function RootPage() {
  // Przekierowanie na stronę główną z domyślnym locale
  redirect(`/${defaultLocale}`);
}

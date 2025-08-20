import { usePathname, useRouter } from 'next-intl/client';

export default function NotFound() {
  const router = useRouter();
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Strona nie znaleziona</h1>
      <p>Wygląda na to, że strona, której szukasz, nie istnieje.</p>
      <a href={router.localePath('/')} onClick={() => router.push('/')} style={{ color: 'blue', textDecoration: 'underline' }}>
        Wróć do strony głównej
      </a>
    </div>
  );
}
// Nie potrzebujemy 'use client', to będzie prosty Server Component

export default function SimpleHomePage() {
  console.log('[Page] Renderuję prostą stronę główną (/page.tsx)');
  return (
    <div>
      <h1 className="text-4xl font-bold text-green-500">Strona działa!</h1>
      <p>Jeśli to widzisz, podstawowy routing i layout działają poprawnie.</p>
    </div>
  );
}

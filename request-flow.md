```mermaid
graph TD
    subgraph "1. Wejście Użytkownika"
        A[Użytkownik wchodzi na /]
    end

    subgraph "2. Middleware (next-intl)"
        B(Middleware next-intl)
        A --> B
        B -- Brak języka w URL --> C[Przekierowanie na domyślny język: /en]
    end

    subgraph "3. Routing i Renderowanie"
        D[Nowe żądanie: GET /en]
        C --> D
        D --> E{Next.js App Router}
        E -- Znajduje plik --> F[src/app/[locale]/page.tsx]
        F --> G[Wyświetla stronę "Strona działa!"]
    end

    subgraph "Alternatywny Flow: Wyszukiwarka"
        H[Użytkownik wchodzi na /en/search] --> B
        B -- Ustawia język 'en' --> I{Next.js App Router}
        I -- Znajduje plik --> J[src/app/[locale]/search/page.tsx]
        J -- Używa RTK Query --> K[Pobiera listę Pokémonów]
        K --> L[Wyświetla CardList]
    end

    subgraph "Alternatywny Flow: Szczegóły"
        L -- Użytkownik klika na kartę --> M[Nawigacja do /en/pokemon/:name]
        M --> B
        B -- Ustawia język 'en' --> N{Next.js App Router}
        N -- Znajduje plik --> O[src/app/[locale]/pokemon/[name]/page.tsx]
        O -- Używa RTK Query --> P[Pobiera dane o Pokémonie]
        P --> Q[Wyświetla komponent Details]
    end

    style G fill:#d4edda,stroke:#155724
    style L fill:#cce5ff,stroke:#004085
    style Q fill:#cce5ff,stroke:#004085
```


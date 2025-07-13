# Diagram stanu PRZED poprawkami

```mermaid
graph TD
    A[App Component] --> B[Search Component]
    A --> C[CardList Component]
    A --> D[Loader Component]

    B --> E[Input Field]
    B --> F[Search Button]

    C --> G[Card Components]
    G --> H[Pokemon Image]
    G --> I[Pokemon Name]
    G --> J[Endpoint URL]

    D --> K[Loading Spinner]

    L[API Call] --> M[PokeAPI]

    style A fill:#ff9999
    style B fill:#ffcc99
    style C fill:#ffcc99
    style D fill:#ffcc99
    note1[Problemy:<br/>- Brak ErrorBoundary<br/>- Brak localStorage<br/>- Problemy z UI<br/>- Brak obsługi błędów<br/>- Nieproporcjonalne elementy<br/>- Brak dark theme<br/>- Brak orange accent colors]
```

## Problemy przed poprawkami:

1. **Brak ErrorBoundary** - aplikacja mogła się zawiesić przy błędach
2. **Brak localStorage** - wyszukiwania nie były zapisywane
3. **Problemy z UI** - nieproporcjonalne ikony, nakładające się elementy
4. **Brak obsługi błędów** - nie było fallback UI
5. **Brak stylowania** - nie było dark theme ani orange accent
6. **Brak testowania ErrorBoundary** - nie było sposobu na przetestowanie obsługi błędów

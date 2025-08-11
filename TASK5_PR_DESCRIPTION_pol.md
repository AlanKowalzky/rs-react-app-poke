## feat: Implementacja RTK Query do obsługi zapytań API (Zadanie 5)

### Lista kontrolna (samoocena)

#### Wymagania (100/100 punktów)
- [x] **Implementacja biblioteki zapytań (RTK Query) jest poprawna - 25 pkt**
  - _Stworzono `pokemonApi` przy użyciu `createApi` i zintegrowano ze storem Redux._
- [x] **Wszystkie wywołania API zostały skonwertowane do użycia biblioteki zapytań - 20 pkt**
  - _Komponenty `App`, `Details` i `Flyout` używają teraz haków RTK Query, a stare pliki (`itemsSlice.ts`, `api.ts`) zostały usunięte._
- [x] **Stany ładowania są poprawnie obsługiwane i wyświetlane - 15 pkt**
  - _Flaga `isLoading` z haków RTK Query jest używana do warunkowego renderowania komponentu `<Loader />`._
- [x] **Stany błędów są poprawnie obsługiwane i wyświetlane - 10 pkt**
  - _Obiekt `error` jest używany do wyświetlania komunikatów o błędach użytkownikowi._
- [x] **Inwalidacja cache i odświeżanie działają poprawnie - 20 pkt**
  - _Zaimplementowano system tagów (`providesTags`) do automatycznego i inteligentnego zarządzania pamięcią podręczną._
- [x] **Ręczna kontrola inwalidacji cache działa zgodnie z oczekiwaniami - 10 pkt**
  - _Przycisk "🔄" w `App.tsx` wywołuje funkcję `refetch()` w celu wymuszenia ponownego pobrania danych._

#### Kary (0 punktów)
- [x] **TypeScript i jakość kodu:**
  - [x] Użyto TypeScript: ✅
  - [x] Brak użycia `any`: ✅
  - [x] Brak użycia `ts-ignore`: ✅
  - [x] Brak "code-smells": ✅
- [x] **Pokrycie testami:**
  - [x] Pokrycie instrukcji > 80% (92.56%): ✅
- [x] **Dobre praktyki React:**
  - [x] Brak bezpośredniej manipulacji DOM: ✅
- [x] **Zależności zewnętrzne:**
  - [x] Brak bibliotek komponentów (np. MUI): ✅
- [x] **Zarządzanie projektem:**
  - [x] Commity przed deadline: ✅
  - [x] PR zgodny z wytycznymi: ✅

### Podsumowanie
- **Wynik za wymagania:** 100/100
- **Kary:** 0
- **Wynik końcowy:** **100/100**
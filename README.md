# ShopeME Front-end

- [Quickstart](#quickstart)
- [Stack technologiczny](#stack-technologiczny)
- [Struktura projektu](#struktura-projektu)
- [Skrypty](#skrypty)


## Quickstart

Wersja deweloperska: `npm run start:dev` lub `npm run server` i `npm run client:dev`

Wersja produkcyjna: `npm run start:prod` lub `npm run client:prod`

Dostępne adresy:

- [http://localhost:3000](http://localhost:3000) aplikacja frontowa
- [http://localhost:3001](http://localhost:3001) serwer mockowy
- [http://localhost:3001/ui](http://localhost:3001/ui) przeglądarka Swaggera (z serwer mockowy)


## Stack technologiczny 

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [React Router V4](https://github.com/ReactTraining/react-router)
- [react-i18next](https://github.com/i18next/react-i18next)
- [pokemock](https://github.com/mobilcom-debitel/pokemock)


## Pliki konfiguracyjne

- [.editorconfig](http://editorconfig.org)
- [.env](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env)
- [.eslintrc](https://eslint.org)
- [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig)


## Struktura projektu

Struktua projektu została oparta na pomyśle zaprezentowanym na (https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)

```
shop-me-frontend/
  docs/
  public/
    locales/
      <język>/
        translations.json
    index.html
  src/
    components
      Examples
        IPAddress
          IPAddress.jsx
          IPAddress.test.jsx
      UI
        ExampleTitle
          ExampleTitle.jsx
          ExampleTitle.test.jsx
    core
      App.jsx
      i18n.js
      Router.jsx
    screens
      Examples
        Fetch.jsx
        Fetch.test.jsx
        Hello.jsx
        Hello.test.jsx
    index.js
    setupTests.js
  swagger/
    <specyfikacja>.<yaml|json>
  package.json
  README.md
```

`docs/` to dodatkowa, bardziej szczegółowa dokumentacja poszczególnych modułów

`public/locales` zawiera subkatalogi odpowiadające wsperianym językom aplikacji. Tłumaczenia przechowywane są w plikach `translations.json` których struktura odpowiada strukturze aplikacji.

`src/components` w katalogach odpowiadającym modułom lub funkcnjonalnościom aplikacji przechowuje ich komponenty. Komponenty nazwa są relatywnie do katalogu components lub UI, np. src/components/UI/ExampleTitle/ExampleTitle.jsx nazywać będzie się ExampleTitle, a src/components/Examples/IPAddress/IPAddress.jsx ExamplesIPAddress

`src/components/UI` przetrzymuje generyczne komponenty używane przez komponenty ekranów jak i same ekrany. Komponenty UI nigdy nie powinny ładować komponentów spoza katalogu UI.

`src/screens` przetrzymuje ekrany zgodnie ze ścieżką routingu, np. /examples/hello znajdzie się w src/screens/Examples/Hello, a komponenty nazywane się zgodnie z relatywną ścieżką od src/, np ScreensExamplesHello (pozwala to uniknąć możliwej kolizji nazw z src/components)

`src/core/App.jsx` to głowny komponent

`src/core/i18n.js` to kofiguracja i18next-react

`src/core/Router.jsx` to konfiguracja/komponent routingu

`*.test.jsx` to test zarówno komponentów jak i ekranow


## Skrypty

W katalogu projektu można uruchomić:

### `npm run start:dev`

Uruchamia jednocześnie serwer mockowy oraz aplikację kliencką.

### `npm run start:prod`

Uruchamia aplikację kliencką z dostępem do serwera produkcyjnego

### `npm run client`

Uruchamia aplikację kliencką. Wymaga ustawienia zmiennej środowiskowej REACT_APP_API

### `npm run client:dev`

Uruchamia aplikację kliencką z dostępem do serwera mockowego

### `npm run client:prod`

Uruchamia aplikację kliencką z dostępem do serwera produkcyjnego

### `npm run server`

Uruchamia serwer mockowy

### `npm run test`

Uruchamia testy jednostkowe.

### `npm build`

Tworzy build produkcyjny w katalogu `build`
# 🍺 CraftQL

CraftQL er en nettside hvor man kan se informasjon om diverse øl. En bruker kan også rate en øl fra 1 til 5 etter hvor god man synes den er. Ratingen til en øl er gjennomsnittet av alle brukeres rating av ølen.

## 🔨 Funksjonalitet

### Søk

Brukere har mulighet til å søke blant øl ved hjelp av en tekstbox. Her kan man velge å søke blant ølens navn, merke, type eller alle tre samtidig. Dette inngår også som vår filtreringsmekanisme. Søkeboksen bruker debounce-mekanismen for å automatisk sende requests etter brukeren har skrevet i søkefeltet samtidig som den sikrer at man ikke sender for mange requests til backenden. Kort fortalt blir det sent en request 0.5 sekunder etter at brukeren sist skrev en ny karakter.

### Sideblaing

Sideblaingen vår er noe kalt infinite scrolling. Når brukeren scroller ned på siden og når bunnen vil det bli lastet inn flere elementer.

Vi valgte å løse dette med et bibliotek kalt 'react-infinite-scroll'. Ved å wrappe dette rundt komponentene, sjekker den når vinduet er på bunn, for så å hente inn ny data. Våre queries har et skip-parameter, som vi har i en state, og for hver innlastning scroller-komponenten kjører, så endrer vi skip med antall elementer som lastes inn, slik at vi alltid henter nye elementer. Deretter blir dataen appendet inn i beerData staten, og vist på siden.

### Detaljer om et objekt

Klikker man på en boks vil man bli vist mer grundig info om hver øl.
Dette har vi løst ved å sende hvert element til hver sin modal via props, hvor vi da henter forskjellig info og presenterer det i teksten/ratingen.

### Sortering

Av sortering har brukeren flere muligheter:

-   Sortere på ølens navn
-   Sortere på ølens merke
-   Sortere på ølens type
-   Sortere på alkoholnivå
-   Sortere på rating

Alle sorteringsmåtene støttet både økende og synkende rekkefølge.

Dersom man sorterer på rating kan man ikke samtidig filtrere søket. Hvorfor blir forklart lenger nede i avsnittet om prisma.

### Brukergenerert data

For å dekke kravet om brukergenerert data har vi lagt til funksjonalitet for å rate en øl. Dette er et tall mellom 1 og 5 etter hvor god ma er. Disse ratingene blir så persistert i databasen og presentert som en gjennomsnittsrating av alle ratings av samme øl.

### Universell utforming

For å oppnå et høyt nivå av universiell utforming har vi lagt fokus på at nettsiden skal være lett å bruke avhengig om man kan se nettsiden eller ikke.

Et eksempel på dette er ratingen av øl. I utganspunktet benyttet vi oss av [react-simple-star-rating](https://www.npmjs.com/package/react-simple-star-rating) for å løse dette. Problemet var at denne ikke opprettholdt standarden vi ønsket, da den ikke var aksesserbar via tastatur. Derfor laget vi vår egen komponent i `Rating.tsx`. Den er aksesserbar gjennom tastaturet og de visuelle effektene er like om du bruker mus eller tastatur. Vi har også benyttet aria-label for å gjøre tydliggjøre funksjonaliteten for de som bruker skjermlesere.

## ⚙️ Testing

Testingen er satt opp slik at komponentene blir testet på lavnivå, mens funksjonaliteten til komponentene seg i mellom blir testet på end2end tester.

Vi har også satt opp pipeline som kjører build og test ved push og merge, slik at vi får sjekket om master opprettholder testene.

#### Komponent-testing

Komponenttestene bruker jest, med enzyme. På komponentene tester vi at alt vises, og at verdier er satt riktig. Vi tester også at props sendes riktig, og at de er satt til riktige verdier.

#### End2end-testing

End-2-end testen sjekker mer generell funksjonalitet, samt samhandlingen mellom bruker og nettside. Her etterligner vi en bruker som går inn på siden og utfører handlinger som skal være mulig. Her sjekker vi samhandlingen blant alle komponenter på siden, og at komponentene reagerer riktig på handlinger man gjør.

## 🧠 Valg av teknologi

### GraphQL

GraphQL er en api arkitektur som lar klienten definere utformingen av data som den ønsker å hente ut, til forskjell fra REST API der serveren definerer hva som hentes ut på et spesifikt endepunkt.

### Frontend

#### Apollo client

_GraphQL code generator_ sammen med _Apollo_ tillater generering av funksjoner med state management for å hente data. I _codegen.yml_ oppgir vi schemaet genereringen skal basere seg på og hvilke metoder som skal genereres hentes fra alle graphql filer under api mappen. Kodegenereringen gjør at kodebasen vår blir mye mer vedlikeholdbar ettersom vi kan bruke de samme typene som i frontend og backend, og ikke trenger å oppdatere typene i frontend når vi endrer dem i backend, vi trenger kun å skrive `yarn generate` i clientmappen for å generere på nytt.

#### Redux

Vi bruker Redux for å holde styr på inputsene til brukeren. Dette mapper vi til variabler som blir brukt spørringen til backend. Redux hjelper oss med å abstrahere bort en del av denne logikken, og `App`-komponeneten, hvor dataen blir fetchet, oppdaterer seg automatisk ved endring av disse feltene.

Det er mange som bruker redux for å holde styr på den dataen som er blitt hentet vi apiet, men dette har vi bevisst valgt ikke gjøre, siden `ApolloClient` gir oss statehåndtering i sine autogenererte metoder i tillegg til caching av dataen. Å ha en kopi av dataen i Redux så vi på lite effektivt, spesielt når datamengden kan bli stor, og har derfor valgt å håndtere staten i komponenten.

#### Context

Vi bruker jo props for å sende gjennom `updateBeerRating`, gjennom noen komponeneter. Her kunne vi brukt Context apiet, men ettersom det var så minimalt så vi det å bruke context som mer komplisert.

#### Chakra UI

Vi har brukt komponentbiblioteket Chakra for en del ferdiglagde komponenter ettersom Chakra har god støtte for _universell utforming_. For eksempel sier WCAG 3.3.2 at alle inputs skal ha et tilhørende label og Chakra's `FormControl` setter kobler underliggende `FormLabel` og `Input` sammen automatisk. Dette skjer ved at `Input` får generert id, og `FormLabel` blir gitt et `for`-attributt som settet til Input sin id.

### Backend

#### Apollo server

_Apollo server_ er et backend framework for GraphQL APIs. Vi valgte å bruke dette fordi den hadde god dokumentasjon, flere tutorials og virket som en effektiv måte å produsere en graphql backend på. I tillegg har som nevnt Apollo laget _Apollo client_, som enkelt integrer med _Apollo server_.

_Apollo server_ tar seg av å binde resolvers til queries, mutations og egendefinerte typer i GraphQL skjemaet slik at vi kun trenger å definere skjemaet og implementere resolvere.

Vi valgte å implementere _Apollo server_ i JavaScript da det ikke var noen krav til bruk av språk for backenden i oppgavebeskrivelsen.

#### Prisma

_Prisma_ er en såkalt **ORM** (**O**bject **R**elation **M**apper) som håndterer databaseakksessen vår. Innebygd i Prisma ligger funksjonalitet for filtrering, pagination og sortering som var en av de største faktorene for at vi valgte å bruke akkurat denne ORMen.

Ved å bruke _Prisma_ effektiviserte vi backend-utviklingen vår drastisk, men det oppstod også noen problemer. ORMen er relativt ny og hadde derfor ikke all funksjonalitet som vi trengte, spesielt når det gjaldt å sortere på aggregerte verdier. Rating er en aggregert verdi av en annen table i databasen og dette skapte derfor problemer for _Prisma_. Som en løsning lagde vi en egen SQL setning som sorterte på rating, men som gikk på bekostning av filtrering. Derfor vil man ikke kunne sortere på rating og filtrere på tekst samtidig.

#### MySQL

Vi valgte å bruke MySQL fordi (1) det er en godt dokumentert, mye brukt, databaseteknologi. (2) Gruppen har tidligere erfaring med MySQL, og vi møtte derfor på minimalt med problemer relatert til databasen under utvikling av applikasjonen.

Vi fant et dataset for øl her: https://www.kaggle.com/nickhould/craft-cans
Vi har definert tabellene Beer, Brand og Type for å beskrive øl. Beer tabellen har fremmednøkler til Brand og Type tabellene slik at vi unngår å lagre samme type og samme merke flere ganger. I tillegg, har vi definert tabellen Review for å lagre brukere sine vurderinger av øl. Review tabellen har fremmednøkkel mot Beer tabellen.

### Testing

#### Cypress

Cypress er et testing-verkyøt som tilrettelegger for intuitiv og visuell end-2-end-testing. Kommandoene er mer "muntlige" og forståelige, og er ment til å hjelpe deg skjønne hva koden gjør. Når man kjører test-klienten åpnes det en browser som viser gjennomgangen av koden, evt viser hvor i koden det feiler, og hvorfor det feiler. Cypress tilbyr også en selector-playground som er meget nyttig når det kommer til å se hva man kan hente fra DOM-et, og når man skal finne navn på eventuelle elementer.

#### Enzyme

Enzyme er testing-verktøy som gjør det lettere å teste komponentenes output, og hjelper med å manipulere, traveresere og simulere output.

## Arbeidsflyt

Vi har stort sett jobbet sammen fysisk har derfor ikke sett stort behvor for å gjøre mye ut av labels og boards på GitLab. Vi har likevel som hovedregel prøvd å holde disse oversiktlige, og bruke branches og issues på en god måte. Mot slutten av prosjektet prøvde vi ut _Trunk based development_, hvor vi hovedsaklig jobbet i master. Dette kunne vi gjøre siden vi satt sammen og parprogget.

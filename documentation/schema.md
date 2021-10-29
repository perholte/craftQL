# Schema for CraftQL

Schemaet er designet med tanke på hvilke funksjonaliteter frontenden skal kunne tilby, feks med tanke på sortering, filtrer, osv.

## Tabeller:

-   Øl
    -   id
    -   navn
-   Type
    -   id
    -   navn
-   Merke
    -   id
    -   navn
-   Vurdering
    -   id
    <!-- - beskrivelse -->
    -   vurdering (antall stjerner, 0-5)

## Filtrering

Brukeren skal kunne filtrere øl på et eller flere attributter (type, merke, vurdering, alkoholprosent, navn).

## Sortering

Brukeren skal kunne sortere resultater etter valgte krav. Feks kan brukeren sortere øl alfabetisk (på navn), etter vurdering og etter alkoholprosent.

GraphQL schema for _Beer_:

```
type Beer {
    id: ID!
    merke: String!
    navn: String!
    type: String!
    styrke: float!
    rating: float
}
```

GraphQL schema for _Queries_:

```
type Queries {
    getBeer(filter: String!, skip: Int!, take: Int!, orderBy: BeerOrder)
}
```

For å legge til/endre på data:

```
type Mutations {
    rateBeer(beerId, rating)
}
```

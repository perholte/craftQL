# Schema for CraftQL


Schemaet er designet med tanke på hvilke funksjonaliteter frontenden skal kunne tilby, feks med tanke på sortering, filtrer, osv.


## Tabeller:
- Øl
  - id
  - navn
- Type
  - id
  - navn
- Merke
  - id
  - navn
- Vurdering
  - id
  <!-- - beskrivelse -->
  - vurdering (antall stjerner, 0-5)


## Filtrering
Brukeren skal kunne filtrere øl på et eller flere attributter (type, merke, vurdering, alkoholprosent, navn). 

## Sortering
Brukeren skal kunne sortere resultater etter valgte krav. Feks kan brukeren sortere øl alfabetisk (på navn), etter vurdering og etter alkoholprosent. 

GraphQL schema for *Beer*:
```
type Beer {
    id: ID!
    merke: String!
    navn: String!
    type: String!
    styrke: float!
    rating: float!
}
```

GraphQL schema for *Queries*:
```
type Queries {
    getBeer(amount)     // default?
    getBeerByType(type)
    getBeerByBrand(brand)
    getBeerWithNameContaining(string)
    getBeerWithRatingAbove(lowerlimit)
    getBeerByStrength(lower, upper)
}
```

Der du gir fra deg data til backend
```
type Mutations {
    rateBeer(beerId, rating)
}
```
import { Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import BeerModal from '../modal/BeerModal';

interface Beer {
    name: string;
    rating: number;
}

// Dummy-data
const BEER: Array<Beer> = [
    { name: 'Corona', rating: 5 },
    { name: 'Frydenlund', rating: 3 },
    { name: 'Hansa', rating: 5 },
    { name: 'ØL', rating: 3 },
    { name: 'Mer ØL', rating: 5 },
    { name: 'Enda mer ØL', rating: 3 },
    { name: 'Pils', rating: 6 },
    { name: 'Sinnabrus', rating: 4 },
    { name: 'Gjæret drikke', rating: 1 },
    { name: 'Frydenlund Fatøl', rating: 1 },
];

const SearchPage: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [search, setSearch] = useState<Array<Beer>>(BEER);

    const filter = (e: React.FormEvent<HTMLInputElement>) => {
        const keyword: string = e.currentTarget.value;

        if (keyword !== ' ') {
            const Searches: Array<Beer> = BEER.filter((beer) => {
                return beer.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setSearch(Searches);
        } else {
            setSearch(BEER);
        }
        setName(keyword);
    };

    return (
        <>
            <Grid templateColumns="repeat( auto-fit, minmax(250px, 1fr))" gap={4}>
                {search && search.length > 0 ? (
                    search.map((beer) => <BeerModal key={beer.name} name={beer.name} rating={beer.rating} />)
                ) : (
                    <h1>No Results</h1>
                )}
            </Grid>
        </>
    );
};

export default SearchPage;

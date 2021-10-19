import { Input, List, ListItem, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

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
    const [result, setResult] = useState<Array<Beer>>(BEER);

    const filter = (e: React.FormEvent<HTMLInputElement>) => {
        const keyword: string = e.currentTarget.value;

        if (keyword !== ' ') {
            const results: Array<Beer> = BEER.filter((beer) => {
                return beer.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setResult(results);
        } else {
            setResult(BEER);
        }
        setName(keyword);
    };

    return (
        <>
            <div>
                <Flex direction="column" justifyContent="center" alignItems="center" spacing="5em">
                    <Input variant="filled" placeholder="Seach for beer" value={name} onChange={filter} />
                    <List spacing={3}>
                        {result && result.length > 0 ? (
                            result.map((beer) => (
                                <ListItem key={beer.name} fontSize="2xl">
                                    {beer.name} {beer.rating} out of 6
                                </ListItem>
                            ))
                        ) : (
                            <h1>No results</h1>
                        )}
                    </List>
                </Flex>
            </div>
        </>
    );
};

export default SearchPage;

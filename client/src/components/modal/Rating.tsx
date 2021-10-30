import { IconButton, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';

interface RatingProps {
    rating: number;
    setRating: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ setRating, rating }) => {
    const [hoverRating, setHoverRating] = useState<number>(0);

    return (
        <HStack
            mx="auto"
            spacing="0"
            //shows the currently selected rating when leaving the "rating area"
            onMouseLeave={() => setHoverRating(rating)}
            onBlur={() => setHoverRating(rating)}
        >
            {[1, 2, 3, 4, 5].map((score) => (
                <IconButton
                    bg="transparent"
                    _hover={{ bg: 'transparent' }}
                    aria-label={`Give ${score} ${score === 1 ? 'star' : 'stars'}`}
                    onClick={() => setRating(hoverRating)}
                    key={score}
                    onMouseEnter={() => setHoverRating(score)}
                    // updates the state when navigating through keyboard
                    onFocus={() => setHoverRating(score)}
                    icon={
                        <svg x="0px" y="0px" width="50px" height="50px" viewBox="0 0 500 1000">
                            <path
                                fill={hoverRating >= score ? 'yellow' : 'grey'}
                                d="M147,386.582c0,0,0.833,235.875,0.833,257.209S168.333,668,172.667,668s145.667,0,154.333,0s17-11,17-28
	                                s0-253,0-253L147,386.582z"
                            />
                            <path
                                fill={hoverRating >= score ? 'rgb(241, 165, 69)' : 'grey'}
                                d="M344,387l-132-0.418V422c0,0-2,16.75-20.75,16.75S171,428.25,171,423.5c0-5.25,0-36.5,0-36.5
	                                s-12.25-0.334-24-0.418c-19.625-2.457-23-25.332-3.625-38.832c-7.5-30.25,64.063-94.25,107.896-16.418
	                                c15.333-15.5,39.781-19,49.115,14.168c3.666-24.834,10.437-43.25,42.974-43.25c28.668,0,41.457,27.082,41.457,41.422
	                                C384.814,375,356.732,387,346.215,387H344z"
                            />
                            <path
                                fill={hoverRating >= score ? 'rgb(241, 165, 69)' : 'grey'}
                                d="M348,597c0,0,27.75,0,53,0c14,0,20.5-16.5,20.5-25.5c0-4.25,0.355-99,0.355-113.75S407.75,437,399.25,437
	                                S348,437,348,437"
                            />
                            <path
                                fill={hoverRating >= score ? 'rgb(241, 165, 69)' : 'grey'}
                                d="M147,385.481c0,0,0.833,235.875,0.833,257.209s20.5,24.209,24.834,24.209s145.667,0,154.333,0s17-11,17-28
	                                s0-48,0-48v-4v-201l-132-0.418v35.418c0,0-2,16.75-20.75,16.75s-20.25-10.5-20.25-15.25c0-5.25,0-36.5,0-36.5
	                                S158.75,385.565,147,385.481c-19.625-2.457-23-25.332-3.625-38.832c-7.5-30.25,64.063-94.25,107.896-16.418
	                                c15.332-15.5,39.78-19,49.114,14.168c3.666-24.834,10.437-43.25,42.974-43.25c28.668,0,41.457,27.082,41.457,41.422
	                                c-0.002,31.328-28.084,43.328-38.602,43.328"
                            />
                            <line fill="grey" x1="196" y1="480" x2="196" y2="562" />
                            <line fill="grey" x1="250" y1="480" x2="250" y2="562" />
                            <line fill="grey" x1="304" y1="480" x2="304" y2="562" />
                        </svg>
                    }
                />
            ))}
        </HStack>
    );
};

export default Rating;

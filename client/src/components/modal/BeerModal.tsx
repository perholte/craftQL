import {
    Button,
    Divider,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    VStack,
    Text,
    Heading,
    HStack,
    Tooltip,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ReactComponent as BeerSVGS } from '../../beer.svg';
import '../../Header-svg.css';
import './BeerModal.css';
import { Beer, useRateBeerMutation } from '../../generated/graphql';
import Rating from './Rating';
import { store } from '../../redux/store';

interface BeerModalProps {
    beer: Beer;
    updateBeerRating: (id: string, rating: number) => void;
}

const BeerModal: React.FC<BeerModalProps> = ({ beer, updateBeerRating }) => {
    const activeSortingOption = store.getState().sort.graphqlParams;
    const filtered =
        Object.keys(activeSortingOption)
            .filter((option) => !['name', 'brand'].includes(option))
            .find((option) => {
                return { ...activeSortingOption }[option];
            }) || 'rating';

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [rating, setRating] = useState<number>(0);
    const [rateBeerMutation] = useRateBeerMutation({
        variables: {
            beerId: beer.id,
            rating: rating,
        },
    });

    const submitRating = () => {
        rateBeerMutation().then((result) => {
            if (result.data?.rateBeer?.rating) {
                updateBeerRating(result.data.rateBeer.id, result.data.rateBeer.rating);
                // console.log(result.data.rateBeer.rating);
                // beer.rating = result.data.rateBeer.rating;
            }
        });
    };

    return (
        <>
            <Button
                className="modalButton"
                id={'modalBox' + beer.id}
                onClick={onOpen}
                color="rgba(117,56,19,255)"
                aria-label="show more"
            >
                <span id="beerBrand">{beer.brand}</span>
                <Heading size="sm" textOverflow="ellipsis">
                    {beer.name}
                </Heading>
                <section id="boxRating">
                    <p>
                        <b>{filtered}: </b>{' '}
                        {filtered === 'rating'
                            ? beer.rating === null
                                ? ' N/A '
                                : beer.rating + ' / 5'
                            : { ...beer }[filtered]}
                    </p>
                </section>
            </Button>

            <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay id={'modalOverlay' + beer.id} />
                <ModalContent id={'modalContent' + beer.id}>
                    <ModalHeader
                        className="modalHeader"
                        id={'modalHeader' + beer.id}
                        alignSelf="flex-start"
                        borderBottom="2px solid rgba(117,56,19,255)"
                        color="rgba(117,56,19,255)"
                        d="inline-block"
                        whiteSpace="nowrap"
                        width="100%"
                        textOverflow="ellipsis"
                        paddingRight="10%"
                        overflow="hidden"
                    >
                        {beer.name} <br />
                    </ModalHeader>
                    <ModalCloseButton className="modalCloseButton" />

                    <ModalBody
                        className="modalBody"
                        id={'modalBody' + beer.id}
                        alignitems="center"
                        my="2rem"
                        color="rgba(117, 56, 19, 255)"
                    >
                        <section id="ratingByOthers">
                            <Text fontWeight="bold" fontSize="1.5em" textAlign="center">
                                {/* Rating: {beer.rating === null ? ' N/A ' : beer.rating + ' / 5'} */}
                                Rating: {beer.rating}
                            </Text>
                            <BeerSVGS />
                        </section>
                        <Divider mb="30px"></Divider>
                        <section id="infoSection">
                            <p>
                                {beer.name} is a {beer.type}. {"It's"} a {beer.abv > 0.05 ? 'strong' : 'medium strong'}{' '}
                                beer with an alcohol percentage of {beer.abv * 100} %. The beer is brewed by{' '}
                                {beer.brand}, and{' '}
                                {beer.rating
                                    ? 'our users have given it a rating of ' + beer.rating + '.'
                                    : 'has not yet been given a rating, be the first to do so!'}
                            </p>
                        </section>
                        <VStack as="section" id="ratingSection" spacing="5">
                            <Rating rating={rating} setRating={setRating} />
                            <HStack>
                                <Tooltip
                                    label="Please select a rating between 1 and 5"
                                    visibility={rating === 0 ? 'visible' : 'hidden'}
                                >
                                    <Button onClick={submitRating} aria-disabled={rating === 0} colorScheme="green">
                                        Submit rating
                                    </Button>
                                </Tooltip>
                                <Button onClick={() => setRating(0)} colorScheme="red">
                                    Clear rating
                                </Button>
                            </HStack>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default BeerModal;

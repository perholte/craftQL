import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    Box,
    Divider,
    VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import './BeerModal.css';
import '../../Header-svg.css';
import { ReactComponent as BeerSVGS } from '../../beer.svg';
import { Beer, useRateBeerMutation } from '../../generated/graphql';
import Rating from './Rating';
import { store } from '../../redux/store';

interface BeerModalProps {
    beer: Beer;
}

const BeerModal: React.FC<BeerModalProps> = ({ beer }) => {
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
            beerId: '1',
            rating: rating,
        },
    });

    const submitRating = () => {
        rateBeerMutation();
    };

    return (
        <>
            <Box className="ModalDiv" onClick={onOpen} color="rgba(117,56,19,255)" aria-label="show more">
                <b>{beer.name}</b>
                {beer.type}
                <section id="boxRating">
                    {filtered === 'rating' ? (
                        <p>
                            <b>Rating: </b> {beer.rating === null ? ' N/A ' : beer.rating + ' / 5'}
                        </p>
                    ) : (
                        <p>
                            <b>{filtered}: </b> {{ ...beer }[filtered]}
                        </p>
                    )}
                </section>
            </Box>

            <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        alignSelf="flex-start"
                        borderBottom="2px solid rgba(117,56,19,255)"
                        color="rgba(117,56,19,255)"
                    >
                        {beer.name} <br />
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody id="modalBody" alignitems="center" my="2rem" color="rgba(117, 56, 19, 255)">
                        <section id="ratingByOthers">
                            <p>{beer.rating === null ? ' N/A ' : beer.rating + ' / 5'}</p>
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
                            <Button onClick={submitRating}>Submit rating</Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default BeerModal;

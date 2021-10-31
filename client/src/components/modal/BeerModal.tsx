import {
    Box,
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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ReactComponent as BeerSVGS } from '../../beer.svg';
import '../../Header-svg.css';
import './BeerModal.css';
import { Beer, useRateBeerMutation } from '../../generated/graphql';
import Rating from './Rating';

interface BeerModalProps {
    beer: Beer;
    updateBeerRating: (id: string, rating: number) => void;
}

const BeerModal: React.FC<BeerModalProps> = ({ beer, updateBeerRating }) => {
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
            <Box
                className="modalBox"
                id={'modalBox' + beer.id}
                onClick={onOpen}
                color="rgba(117,56,19,255)"
                aria-label="show more"
            >
                <b>{beer.name}</b>
                {beer.type}
                <section id="boxRating">
                    <p>
                        <b>Rating: </b> {beer.rating ? beer.rating + ' / 5' : ' N/A '}
                    </p>
                </section>
            </Box>

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
                            {beer.name} is a {beer.type}. {"It's"} a {beer.abv > 0.05 ? 'strong' : 'medium strong'} beer
                            with an alcohol percentage of {beer.abv * 100} %. The beer is brewed by {beer.brand}, and{' '}
                            {beer.rating
                                ? 'our users have given it a rating of ' + beer.rating + '.'
                                : 'has not yet been given a rating, be the first to do so!'}
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

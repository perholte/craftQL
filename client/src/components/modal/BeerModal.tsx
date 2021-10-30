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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import './BeerModal.css';
import '../../Header-svg.css';
import { ReactComponent as BeerSVGS } from '../../beer.svg';
import { Rating } from 'react-simple-star-rating';
import { Beer } from '../../generated/graphql';

interface BeerModalProps {
    Beer: Beer;
}

const BeerModal: React.FC<BeerModalProps> = ({ Beer }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [rating, setRating] = useState<number>(0);
    return (
        <>
            <Box
                className="modalBox"
                id={'modalBox' + Beer.id}
                onClick={onOpen}
                color="rgba(117,56,19,255)"
                aria-label="show more"
            >
                <b>{Beer.name}</b>
                {Beer.type}
                <section id="boxRating">
                    <p>
                        <b>Rating: </b> {Beer.rating === null ? ' N/A ' : Beer.rating + ' / 5'}
                    </p>
                </section>
            </Box>

            <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay id={'modalOverlay' + Beer.id} />
                <ModalContent id={'modalContent' + Beer.id}>
                    <ModalHeader
                        className="modalHeader"
                        id={'modalHeader' + Beer.id}
                        alignSelf="flex-start"
                        borderBottom="2px solid rgba(117,56,19,255)"
                        color="rgba(117,56,19,255)"
                    >
                        {Beer.name} <br />
                    </ModalHeader>
                    <ModalCloseButton className="modalCloseButton" />

                    <ModalBody
                        className="modalBody"
                        id={'modalBody' + Beer.id}
                        alignitems="center"
                        my="2rem"
                        color="rgba(117, 56, 19, 255)"
                    >
                        <section className="ratingByOthers" id={'ratingByOthers' + Beer.id}>
                            <p>{Beer.rating === null ? ' N/A ' : Beer.rating + ' / 5'}</p>
                            <BeerSVGS />
                        </section>
                        <Divider mb="30px"></Divider>
                        <section className="infoSection" id={'infoSection' + Beer.id}>
                            {Beer.name} is a {Beer.type}. Its a {Beer.abv > 0.03 ? 'strong' : 'medium strong'} beer with
                            an alcohol percentage of {Beer.abv * 100} %. The beer is brewed by {Beer.brand}, and{' '}
                            {Beer.rating
                                ? 'our users have given it a rating of ' + Beer.rating + '.'
                                : 'has not yet been given a rating, be the first to do so!'}
                        </section>
                        <section className="ratingSection" id={'ratingSection' + Beer.id}>
                            <Rating className="rating" onClick={setRating} ratingValue={rating}>
                                <svg x="0px" y="0px" width="50px" height="50px" viewBox="0 0 500 1000">
                                    <path
                                        fill="currentColor"
                                        d="M147,386.582c0,0,0.833,235.875,0.833,257.209S168.333,668,172.667,668s145.667,0,154.333,0s17-11,17-28
	                                s0-253,0-253L147,386.582z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M344,387l-132-0.418V422c0,0-2,16.75-20.75,16.75S171,428.25,171,423.5c0-5.25,0-36.5,0-36.5
	                                s-12.25-0.334-24-0.418c-19.625-2.457-23-25.332-3.625-38.832c-7.5-30.25,64.063-94.25,107.896-16.418
	                                c15.333-15.5,39.781-19,49.115,14.168c3.666-24.834,10.437-43.25,42.974-43.25c28.668,0,41.457,27.082,41.457,41.422
	                                C384.814,375,356.732,387,346.215,387H344z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M348,597c0,0,27.75,0,53,0c14,0,20.5-16.5,20.5-25.5c0-4.25,0.355-99,0.355-113.75S407.75,437,399.25,437
	                                S348,437,348,437"
                                    />
                                    <path
                                        fill="currentColor"
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
                            </Rating>
                            <Button id={'submitButton' + Beer.id} size="xs">
                                Submit rating
                            </Button>
                        </section>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default BeerModal;

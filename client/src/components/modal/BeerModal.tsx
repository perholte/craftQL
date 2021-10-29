import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    ModalContent,
    Box,
} from '@chakra-ui/react';
import React from 'react';
import './BeerModal.css';

type BeerType = {
    name: string;
    rating: number;
};
interface BeerModalProps {
    Beer: BeerType;
}

const BeerModal: React.FC<BeerModalProps> = ({ Beer }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box className="ModalDiv" onClick={onOpen} color="rgba(117,56,19,255)" aria-label="show more">
                <b>{Beer.name}</b>
                <br /> Type & Rating
            </Box>

            <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader alignSelf="center" color="rgba(117,56,19,255)">
                        {Beer.name}
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody mx="3rem">
                        {Beer.rating} out of 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                        distinctio nobis totam eos. Magni, aut nihil ratione accusantium aspernatur nesciunt ullam. Nam
                        nisi a eos officiis qui eveniet et nostrum! Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Temporibus saepe recusandae sit, nihil perferendis doloremque commodi voluptatum culpa
                        aliquid? Totam, dignissimos. Fugit ea eum inventore fuga explicabo, ipsam quibusdam blanditiis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam suscipit, veritatis illo
                        pariatur placeat eum provident recusandae facere ratione animi sequi esse perspiciatis
                        reiciendis aspernatur nobis aut doloremque debitis commodi.ipisicing elit. Repellendus
                        distinctio nobis totam eos. Magni, aut nihil ratione accusantium aspernatur nesciunt ullam. Nam
                        nisi a eos officiis qui eveniet et nostrum! Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Temporibus saepe recusandae sit, nihil perferendis doloremque commodi voluptatum culpa
                        aliquid? Totam, dignissimos. Fugit ea eum inventore fuga explicabo, ipsam quibusdam blanditiis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam suscipit, veritatis illo
                        pariatur placeat eum provident recusandae facere ratione animi sequi esse perspiciatis
                        reiciendis aspernatur nobis aut doloremque debitis commodi.ipisicing elit. Repellendus
                        distinctio nobis totam eos. Magni, aut nihil ratione accusantium aspernatur nesciunt ullam. Nam
                        nisi a eos officiis qui eveniet et nostrum! Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Temporibus saepe recusandae sit, nihil perferendis doloremque commodi voluptatum culpa
                        aliquid? Totam, dignissimos. Fugit ea eum inventore fuga explicabo, ipsam quibusdam blanditiis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam suscipit, veritatis illo
                        pariatur placeat eum provident recusandae facere ratione animi sequi esse perspiciatis
                        reiciendis aspernatur nobis aut doloremque debitis commodi.
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default BeerModal;

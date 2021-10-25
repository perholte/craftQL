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
} from '@chakra-ui/react';
import React from 'react';
import './BeerModal.css';

interface BeerModalProps {
    name: string;
    rating: number;
}

const BeerModal: React.FC<BeerModalProps> = ({ name, rating }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <div className="ModalDiv" onClick={onOpen}>
                {name} + Rating + Type
            </div>

            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{name}</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>{rating} out of 6</ModalBody>

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

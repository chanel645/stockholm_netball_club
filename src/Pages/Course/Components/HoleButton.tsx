import { Button } from "@chakra-ui/react";
import UseWindowSize from '../../../commonComponents/UseWindowSize';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
// Replacement court images will be added later.
import { MobileWidth } from "../../../commonComponents/Globals";


const HoleButton = ({
  top = "30%",
  left = "50%",
  transform = "translate(-50%, -50%)",
  label = "Click Me",
}) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { width, height } = UseWindowSize();
  return (
    <div>
      <Button
        colorScheme="coreTheme"
        rounded="full"
        size={width <= MobileWidth ? "xs" : "sm"}
        sx={{
          position: "absolute",
          top,
          left,
          transform,
        }}
        onClick={onOpen}
      >
        {label}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent minW={width * 0.4}>
          <ModalHeader>Hole {label}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div style={{ aspectRatio: '16 / 9', width: '100%' }}>
              {/* Replacement court image goes here. */}
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>

  );
};

export default HoleButton;
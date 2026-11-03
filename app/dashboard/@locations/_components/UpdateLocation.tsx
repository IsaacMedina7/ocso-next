'use client';
import {ReactNode, useState} from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { LuPenTool } from "react-icons/lu";

export default function UpdateLocation({children}: {children: ReactNode}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <>
      <Button onPress={onOpen} color="primary"> <LuPenTool size="20"/> </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

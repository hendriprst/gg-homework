import { AddIcon } from '@chakra-ui/icons';
import { FormControl, FormLabel, Button, Textarea, Input, Box, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import React from 'react'

function CreatePlaylist() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hi, Reviewer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            First of all, I'm sorry i couldn't do the final project well. It took me a long time to understand the material, I've only done the assignment on Auth to Spotify Login. I've been trying to watch video tutorials on youtube, read the docs but I still confused how to store token using redux, get data from API and logic about selected song to create playlist.
            <br />
            I also want to apologize for disappointing the instructors who have taught the material well.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box m="4" p="4" boxShadow="base" borderRadius="lg">
        <FormControl isRequired>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input id="title" variant="flushed" placeholder="Create Title" minLength="10" />
        </FormControl>
        <FormControl my="4">
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea id="description" variant="flushed" placeholder="Create Description" />
        </FormControl>
        <Stack direction="row" spacing="4">
          <Button leftIcon={<AddIcon />} onClick={onOpen} colorScheme="green">Create Playlist</Button>
          <Button colorScheme="green" variant="outline">Cancel</Button>
        </Stack>
      </Box>
    </>
  )
}

export default CreatePlaylist;
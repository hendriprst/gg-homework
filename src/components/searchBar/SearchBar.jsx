import { SearchIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, Box, Button, Flex, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './styles.css'

function SearchBar(onSearch) {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [token, setToken] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(search);
    e.currentTarget.reset();
  };

  const searchData = async () => {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const res = await axios.get(url, headers);
    return res.data.tracks.items;
  };

  useEffect(() => {
    searchData();
  }, [query]);

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
      <Stack mx="2">
        <Box boxShadow="base" borderRadius="lg" h="700" p="4">
          <form onSubmit={handleSubmit}>
            <Alert status="warning" borderRadius="lg">
              <AlertIcon />
              Select track first to create a playlist
            </Alert>
            <br />
            <Flex>
              <label htmlFor="search"></label>
              <InputGroup>
                <InputLeftElement children={<SearchIcon />} />
                <Input
                  variant="filled"
                  placeholder="Search for Track or Artist"
                  onChange={(e) => setSearch(e.target.value)}
                  id="search"
                  type="search"
                />
              </InputGroup>
              <Button colorScheme="green" variant="ghost" onClick={onOpen}>
                Search
              </Button>
            </Flex>
          </form>
        </Box>
      </Stack>
    </>
  )
}

export default SearchBar;
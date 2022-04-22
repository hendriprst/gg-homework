import { Avatar, Box, Divider, Flex, Heading, Spacer } from '@chakra-ui/react';
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav>
        <Flex p="4">
          <Box>
            <Heading size="base" p="2">Gigihify</Heading>
          </Box>
          <Spacer />
          <Box>
            <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          </Box>
        </Flex>
        <Divider />
      </nav>
    </>
  )
}

export default Navbar;
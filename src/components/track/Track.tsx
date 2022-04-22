import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface TrackProps {
  images: string;
  title: string;
  artist: string;
  albums: string;
}

const Track = ({ images, title, artist, albums } : TrackProps) => {
  return (
    <>
      <Flex>
        <img src={images} alt={title} />
        <Box>
          <Heading as="h3">{title}</Heading>
          <Text as="p">{artist}</Text>
          <Text as="p">{albums}</Text>
          <Button borderRadius="full">Select</Button>
        </Box>
      </Flex>
    </>
  );
}

export default Track;
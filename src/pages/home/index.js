import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import CreatePlaylist from "../createPlaylist/CreatePlaylist";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/searchBar/SearchBar";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <section>
        <Flex direction={{ base: "column", md: "row"}}>
          <Box>
            <CreatePlaylist />
          </Box>
          <Spacer />
          <Box width="full" my="4">
            <SearchBar />
          </Box>
        </Flex>
      </section>
    </>
  );
};

export default Home;

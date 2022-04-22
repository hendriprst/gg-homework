import React from "react";
import { loginUrl } from "../../data/auth";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Login = () => {
  return (
    <>
      <Container maxW="7xl">
        <Stack
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex="1" spacing={{ base: 2, md: 8 }}>
            <Heading
              lineHeight="100%"
              fontSize={{ base: "3xl", lg: "6xl" }}
            >
              Listening is
              <br />
              <Text as="span" color="green.500">
                Everything
              </Text>
            </Heading>
            <Text>
              Create playlist for each and every character that you play
            </Text>
            <Stack
              spacing="6"
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded="full"
                fontWeight="medium"
                px="8"
                colorScheme="green"
                bg="green.500"
                _hover={{ bg: "green.700" }}
              >
                <a href={loginUrl}>LOG IN</a>
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex="1"
            justify="center"
            align="center"
            position="relative"
            w="full"
          >
            <Box
              position="relative"
              height="300"
              rounded="lg"
              boxShadow="2xl"
              width="full"
              overflow="hidden"
            >
              <Image
                alt="Photo by Mink Mingle on Unsplash"
                fit="cover"
                align="center"
                w="100%"
                h="100%"
                src="https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
              />
            </Box>
          </Flex>
        </Stack>
        <Text as="footer" opacity="0.7" align="center">
          <i>Made with Overthinking</i>
        </Text>
      </Container>
    </>
  );
};

export default Login;

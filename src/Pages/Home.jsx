import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import Resume from "./fw19_0493-Varinder-Brar-Resume.pdf";

import Typewriter from "typewriter-effect";
export default function Home() {
  const [state] = useState({
    title: "Hi There",
    titleSecond: "I'M Varinder Brar",
  });
  return (
    <Container maxW={"7xl"} id={"home"}>
      <Box mt={"5rem"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              textAlign="start"
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
              >
                {state.title}
              </Text>
              <br />
              <Text as={"span"} color={"red.400"}>
                {state.titleSecond}
              </Text>
            </Heading>
            <Box
              display={"flex"}
              justifyContent={"start"}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              lineHeight={1.1}
              fontWeight="600"
            >
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Full-Stack Developer.",
                    "Problem Solver.",
                    "Tech Lover.",
                  ],
                }}
              />
            </Box>
            <Box w={"80%"}>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/172btifiNmPUdJFonCULefi8coZ0sLkRi/view"
                    )
                  }
                  rounded={"full"}
                  as={"a"}
                  href={Resume}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  mt={8}
                  bg="none"
                  border={"1px solid red"}
                  _hover={{ bg: "red.400" }}
                  target={"_blank"}
                  rel="noreferrer"
                  download={"fw19_0493-Varinder-Brar-Resume.pdf"}
                >
                                      RESUME
                </Button>
              </Stack>
            </Box>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              width={"auto"}
              overflow={"hidden"}
              bgColor={useColorModeValue("#1A202C", "red.400")}
              borderRadius={"50%"}
              h="auto"
            >
              <Image
                alt={"Hero Image"}
                h={{ base: "820px", s: "800px", m: "500px" }}
                fit={"cover"}
                align={"center"}
                borderRadius={"50%"}
                src={
                  "https://avatars.githubusercontent.com/u/103635395?s=400&u=270605e3e7279fd076ba275a85f2e098b2c05aca&v=4"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Box>
    </Container>
  );
}

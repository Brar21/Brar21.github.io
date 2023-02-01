import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import {
  BsGithub,
  BsLinkedin,
  BsPerson,
  BsYoutube,
  BsWhatsapp,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

export default function Contact() {
  const form = useRef();
  const toast = useToast();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oeqycmu",
        "template_3rkendt",
        e.target,
        "xZgA8Z8fvAKyMGg9m"
      )
      .then(
        (response) => {
          toast({
            title: "Mail Send.",
            description: "Mail is Send to Varinder.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Box position={"static"} m="auto" w={"100%"}>
      <Flex align="center" justify="center" id="contact">
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
          w="100%"
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: "3xl",
                  md: "5xl",
                }}
              >
                Contact me
              </Heading>

              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{
                  base: "row",
                  md: "column",
                  sm: "column",
                  lg: "row",
                }}
              >
                <Box>
                  <Image
                    src="https://mohit-portfolio.vercel.app/assets/contact.f495edec.svg"
                    w={"500px"}
                    alt="contact svg"
                  />
                  <Stack
                    m={"auto"}
                    align="center"
                    justifyContent="space-between"
                    display={"flex"}
                    flexDirection="row"
                    spacing={{ base: 2, md: 4, lg: 8 }}
                  >
                    <Button bg={"transparent"} display="none"></Button>
                    <Button
                      bg="red.400"
                      color="white"
                      _hover={{
                        bg: "red.400",
                      }}
                    >
                      <Link href="https://github.com/brar21">
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="4rem"
                          icon={<BsGithub size="2rem" />}
                          _hover={{
                            bg: "red.400",
                          }}
                          isRound
                        />
                        Github
                      </Link>
                    </Button>

                    <Button
                      bg="red.400"
                      color="white"
                      _hover={{
                        bg: "red.400",
                      }}
                    >
                      <Link href="https://www.linkedin.com/in/varinder-brar">
                        <IconButton
                          aria-label="linkedin"
                          variant="ghost"
                          size="4rem"
                          icon={<BsLinkedin size="2rem" />}
                          _hover={{
                            bg: "red.400",
                          }}
                          isRound
                        />{" "}
                        LinkedIn
                      </Link>
                    </Button>
                    <Button
                      bg="red.400"
                      color="white"
                      _hover={{
                        bg: "red.400",
                      }}
                    >
                      <Link>
                        <IconButton
                          aria-label="linkedin"
                          variant="ghost"
                          size="4rem"
                          icon={<SiGmail size="2rem" />}
                          _hover={{
                            bg: "red.400",
                          }}
                        />{" "}
                        vs21418@gmail.com
                      </Link>
                    </Button>
                    <Button
                      bg="red.400"
                      color="white"
                      _hover={{
                        bg: "red.400",
                      }}
                    >
                      <Link href="https://wa.me/916280849667" target={"_blank"}>
                        <IconButton
                          aria-label="linkedin"
                          variant="ghost"
                          size="4rem"
                          icon={<BsWhatsapp size="2rem" />}
                          _hover={{
                            bg: "red.400",
                          }}
                          isRound
                        />{" "}
                        +91 6280849667
                      </Link>
                    </Button>
                    <Button
                      bg="red.400"
                      color="white"
                      _hover={{
                        bg: "red.400",
                      }}
                    >
                      <Link href="https://www.youtube.com/@JavaScriptFolks">
                        <IconButton
                          aria-label="yotube"
                          variant="ghost"
                          size="4rem"
                          icon={<BsYoutube size="2rem" />}
                        />
                        Youtube
                      </Link>
                    </Button>
                  </Stack>
                </Box>
                <Stack align="center" justify="space-between" display={"grid"}>
                  <form ref={form} onSubmit={sendEmail}>
                    <Box borderRadius="lg" p={8} shadow="base">
                      <VStack spacing={5}>
                        <FormControl isRequired>
                          <FormLabel>Name</FormLabel>

                          <InputGroup>
                            <InputLeftElement children={<BsPerson />} />
                            <Input
                              type="text"
                              name="user_name"
                              placeholder="Your Name"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel>Email</FormLabel>

                          <InputGroup>
                            <InputLeftElement children={<MdOutlineEmail />} />
                            <Input
                              type="email"
                              name="user_email"
                              placeholder="Your Email"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel>Message</FormLabel>

                          <Textarea
                            name="message"
                            placeholder="Your Message"
                            rows={6}
                            resize="none"
                          />
                        </FormControl>

                        <Button
                          colorScheme="blue"
                          bg="red.400"
                          color="white"
                          _hover={{
                            bg: "red.400",
                          }}
                          type="submit"
                          isFullWidth
                        >
                          Send Message
                        </Button>
                      </VStack>
                    </Box>
                  </form>
                </Stack>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  VStack,useToast
} from '@chakra-ui/react';
import React, { useRef } from "react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter, BsYoutube } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import emailjs from "@emailjs/browser";
import { useState } from 'react';


export default function Contact() {
  const form = useRef();
  const [show, setShow] = useState(false);
  const sendEmail = (e) => {
    const toast = useToast()
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
          title: 'Account created.',
          description: "Mail is Send to Varinder.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setShow(false)
  };

  return (
    <Box position={'static'} m='auto' w={'30%'}>
    <Flex
      align="center"
      justify="center"
      id="contact"
>
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '3xl',
                md: '5xl',
              }}>
             Contact me
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'column' }}>
              <Stack
                align="center"
                justify="space-between"
                  direction={{ base: 'column', md: 'row' }}
                  
                >
                <Link href="https://github.com/brar21">
                  <IconButton

                    aria-label="github"
                    variant="ghost"
                    size="xl"
                    // fontSize="3xl"
                      icon={<BsGithub size="5rem" />}
                    _hover={{
                      bg: 'red.400',
                   
                    }}
                    isRound
                  />
                </Link>

                  <Link href="https://www.youtube.com/@JavaScriptFolks">
                  <IconButton
                    aria-label="youtube"
                    variant="ghost"
                    size="4rem"
                      icon={<BsYoutube size="5rem" />}
                    _hover={{
                      bg: 'red.400',
                 
                    }}
                    m='0 2rem'
                  />
                </Link>

                <Link href="https://www.linkedin.com/in/varinder-brar">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="5rem" />}
                    _hover={{
                      bg: 'red.400',
                     
                    }}
                    isRound
                  />
                </Link>
              </Stack>
                {show ? <form ref={form} onSubmit={sendEmail}>
                  <Box
                  
                    borderRadius="lg"
                    p={8}
                    shadow="base">
                    <VStack spacing={5}>
                      <FormControl isRequired>
                        <FormLabel>Name</FormLabel>

                        <InputGroup>
                          <InputLeftElement children={<BsPerson />} />
                          <Input type="text" name="user_name" placeholder="Your Name" />
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
                          bg: 'red.400',
                        }}
                        type="submit"
                        isFullWidth>
                        Send Message
                      </Button>
                    </VStack>
                  </Box>
                </form>:<Button onClick={()=>setShow(true)} bg={'red.400'}>Send Message</Button>}
            </Stack>
          </VStack>
        </Box>
      </Box>
      </Flex>
    </Box>
  );
}

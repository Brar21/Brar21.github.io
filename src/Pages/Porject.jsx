import React from 'react'
// import { Box } from '@chakra-ui/react'
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { SiCsswizardry, SiJavascript, SiChakraui } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
const Project = () => {
  const ProjectData = [
    {
      title: "Zara-Website",
      link: "https://kunalchandel4.github.io/teamDeskChampions/",
      url: "https://github.com/Brar21/Zara-Clone",
      description:
        "The company specializes in fast fashion, and products include clothing, accessories, shoes, beauty, and perfumes. Zara is one of the most successful fashion retail brands in the world",
      language: [<TiHtml5  />, " ", <SiCsswizardry />, " ", <SiJavascript  />, " ", " "],
      image:
        "https://github.com/kunalchandel4/teamDeskChampions/raw/main/images/Screenshot%20(1096).png",
    },
    {
      title: "Mailhubb.com",
      link: "https://sweet-cactus-515f7c.netlify.app/",
      url: "https://github.com/Brar21/MailHubb.com",
      description:
        "MailChimp is a marketing automation platform designed and developed for businesses using email to reach out to their target market.",
      language: [" ", <GrReactjs  />, " ", <SiChakraui  />, " ", < TiHtml5  />, " ", <SiCsswizardry />, " ", <SiJavascript  />],
      image:
        "https://github.com/Brar21/MailHubb.com/blob/master/mailhubb/src/Images/Screenshot%202022-12-04%20102411.jpg?raw=true",
    },
    {
      title: "NDTV.com",
      link: "https://brar21.github.io/NDTV-Website.com/",
      url: "https://github.com/Brar21/NDTV-Website.com",
      description:
        "This is a personal project based Professional Resume Builder, with downloading in PDF format feature. Made with the help of react redux.",
      language: [<TiHtml5 />, <SiCsswizardry />, " ", <SiJavascript />, " "],
      image:
        "https://github.com/Brar21/NDTV-Website.com/raw/master/imges/Homepage.jpg?raw=true",
      },
      {
        title: "Nykaa.com",
        link: "https://panachebeauty.netlify.app/",
        url: "https://github.com/AdityaBr11/Nykaa-Clone",
        description:
          "Nykaa.com Clone is ReactJS e-commerce web application that allows you to buy cosmetics products online with effortable prices.",
        language: [<TiHtml5  />, <SiCsswizardry />, " ", <SiJavascript />, " "],
        image:
          "https://camo.githubusercontent.com/fe904ef2dbd4519af3547dfbdc316657eaa3511f71be243ce9122d80a69075aa/68747470733a2f2f692e6962622e636f2f43516b305232542f6e796b61612e706e67",
      },
      {
        title: "Typetest.com",
        link: "https://typemaster-speedtester.vercel.app/",
        url: "https://github.com/Brar21/Typemaster-speedtester",
        description:
          "Typing Master to check real time typing speed and accuracy's during typing paragraphs. Also providing ranking according to typing speed.",
        language: [<TiHtml5 />, <SiCsswizardry />, " ", <SiJavascript />, " "],
        image:
          "https://github.com/Brar21/Typemaster-speedtester/raw/master/src/images/Homepage.jpg?raw=true",
      },
  ];
  return (
    <Box  id="projects">
      <Heading  m="5rem" textAlign={'center'}>Projects</Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={4} mt={18}>
        {ProjectData.map((t) => {
          return (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              _hover={{ border: "5px solid #F56565" }}
              rounded={"xl"}
              mx={8}
              p={3}
            >
              <Image src={t.image} />

              <Text fontSize={"1.3rem"}>{t.title}</Text>
              <Text>{t.description}</Text>
              <Text display={'flex'} gap={4} fontSize={'2.5rem'} p={5} >{t.language}</Text>



              <Flex justifyContent={"space-around"} gap={[4]} mb='2rem'>
                <Button target="_blank" as="a" href={t.url} fontSize='54px' bg={"none"} borderRadius="60%" w={'auto'} padding={2} h={'auto'} _hover={{ bg: "red.400" }}>
                  <AiFillGithub />
                </Button>
                <Button as="a" href={t.link} target="_blank" fontSize='54px' bg={"none"} borderRadius="60%" w={'auto'} padding={2} h={'auto'} _hover={{ bg: "red.400" }}>
                  <FaRegEye />
                </Button>
              </Flex>

            </Stack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Project;

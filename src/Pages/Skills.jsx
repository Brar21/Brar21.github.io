import React from "react";
import {
  SiChakraui,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNodedotjs,
  SiCss3,
  SiRedux,
  SiLinux,
  SiNpm,
} from "react-icons/si";
import {
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

const Skills = () => {
  const technologies = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "red.600",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "green.400",
    },
    {
      name: "SCSS",
      icon: <SiCss3 />,
      color: "red.500",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color: "purple.400",
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
      color: "yellow.400",
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "blue.400",
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      color: "red.500",
    },

    {
      name: "Chakra UI",
      icon: <SiChakraui />,
      color: "teal.400",
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
      color: "blue.500",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "red.500",
    },

    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "orange.500",
    },

    {
      name: "NodeJs",
      icon: <SiNodedotjs />,
      color: "green.500",
    },
    {
      name: "Linux-CLI",
      icon: <SiLinux />,
      color: "yellow.500",
    },
    {
      name: "NPM",
      icon: <SiNpm />,
      color: "red.500",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "red.500",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        color: "red.500",
      }
  ];
  return (
    <Box mx={[4, 8, 16, 24]} id="skills">
      <Heading mb={"5rem"}>Skills</Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} mt={8} className="anim">
        {technologies.map((t) => {
          return (
            <Stack justifyContent={"center"} alignItems={"center"} mx={8} p={2}>
              <Box
                fontSize={"7xl"}
                color={t.color}
                _hover={{ fontSize: "8xl", transition: "smooth" }}
              >
                {t.icon}
              </Box>
              <Text fontSize={"md"} fontWeight={500}>
                {t.name}
              </Text>
            </Stack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;

import { Box,Heading,Image,Text,Stack,Container } from '@chakra-ui/react'
import React from 'react';


const About = () => {
  return (
    <Container maxW={'7xl'}  >
    <Box id={"about"} h={{base:'100vh',s:"50vh"}} w="100%" m={"10rem 0rem"}>
      <Heading  textAlign={'center'} m="10rem 0rem 1rem 0rem">ABOUT</Heading>
      <Stack
        justifyContent={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
          <Image src='https://github.com/Brar21/Brar21.github.io/blob/master/src/components/Images/About%20me.jpg?raw=true' alt='about me'/>
          
      <Text fontSize={{base:"30px"}} textAlign={'start'}>
        Hello stranger! 👋, my name is Varinder Brar and I am from Nabha, Punjab. I am  passionate about building digital products that improve everyday experience for people.


        I am Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.
        </Text>
      </Stack>
      </Box>
    </Container>
  )
}

export default About
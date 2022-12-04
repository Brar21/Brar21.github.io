import { Box,Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'
import img from "../components/Images"
const About = () => {
  return (
    <Box id={"about"} h={'100vh'} border="1px solid red">
      <Heading>ABOUT</Heading>
      <Image src={img/}
      <Text>
        Hello stranger! 👋, my name is Varinder Brar and I am a Full Stack Developer, passionate about building digital products that improve everyday experience for people.


        I am Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.
      </Text>
</Box>
  )
}

export default About
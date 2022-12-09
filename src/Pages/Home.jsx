import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

import Typewriter from "typewriter-effect";
export default function Home() {
  const [state] = useState({
    title: "Hi There",
    titleSecond: "I'M Varinder Brar",

})
  return (
    <Container maxW={'7xl'} id={'home'} top='100px'>
      <Box>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            textAlign='start'
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
             {state.title}
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
             {state.titleSecond}
            </Text>
          </Heading>
          <Box display={'flex'} justifyContent={'start'} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }} lineHeight={1.1} fontWeight='600'>
            <Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Full-Stack Developer.",
                "Problem Solver.",
                "Tech Lover."
              ]
            }}/>
          </Box>
          <Box w={'80%'}>
        
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
         
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
                px={6}
                  mt={8}
                  bg="none"
                  border={"1px solid red"}
                  _hover={{bg:"red.400"}}
              >
              Resume
            </Button>
            </Stack>
          </Box>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          {/* <Blob
            w={'100%'}
            h={'120%'}
            position={'absolute'}
            top={'-5%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('white.400', 'white.400')}
          /> */}
          <Box
            position={'relative'}
          
            width={'auto'}
              overflow={'hidden'}
              bgColor={useColorModeValue("#1A202C","red.400")}
              borderRadius={'50%'}
              h="auto"
             >
          
            <Image
                alt={'Hero Image'}
                h={{base:"820px",s:"800px" ,m:"500px"}}
              fit={'cover'}
              align={'center'}
              
              borderRadius={"50%"}
              
             
              src={
"https://avatars.githubusercontent.com/u/103635395?s=400&u=270605e3e7279fd076ba275a85f2e098b2c05aca&v=4"              }
            />
          
          </Box>
        </Flex>
        </Stack>
      </Box>

    </Container>
  );
}



// // export const Blob = (props) => {
// //   return (
// //     <Icon
// //       width={'100%'}
// //       viewBox="0 0 578 440"
// //       fill="none"
// //       xmlns=""
// //       {...props}>
// //       <path
// //         fillRule="evenodd"
// //         clipRule="evenodd"
// //         d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
// //         fill="currentColor"
// //       />
// //     </Icon>
// //   );
// };
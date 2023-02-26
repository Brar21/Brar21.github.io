import React from 'react';
import NavLink from './NavLink';
import {
    Box,
    Flex,
   IconButton,
    Heading,
    Button,
    Menu,
    useColorModeValue,
    Stack,
    useColorMode,
    useDisclosure,
    HStack,
    Text
    
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {HamburgerIcon,CloseIcon} from '@chakra-ui/icons';
import  "./fw19_0493-Varinder-Brar-Resume.pdf"

const Links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
    { name: "Resume" ,id:"resume"}
];


export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'fixed'} w={'100%'} zIndex={999} top={'0'}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box><Heading className='heading' fontSize={20} display={'flex'} fontFamily="Dancing Script">VARINDER<Text ml={2}>BRAR</Text></Heading></Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex', }}>
                            {Links.map((link, i) => (
                                <NavLink
                                    key={i}
                                    to={link.id}
                                    name={link.name}
                                    fontSize={15}
                                    bg="none"
                                    _hover={{ bg: "red.400" }}
                                    onClick={() => onClose()}
                                />
                            ))}
                        </HStack>
                    </HStack>
              
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                               
                                <Button
                                    onClick={()=>window.open("https://drive.google.com/file/d/1FcU6NJQHfHq4RByVl_vEBIpcb5Ig6MDb/view")}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                    _hover={{ bg:"red.400" }}
                                    bg="red.400 "
                                    color='white'
                                    textDecoration='none'
                                    padding='2 5'
                                    display={{ base: 'none', md: 'flex' }}
                                    target={"_blank"}
                                    rel="noreferrer"  
                                >
                                          <a href={"fw19_0493-Varinder-Brar-Resume.pdf"} download={"fw19_0493-Varinder-Brar-Resume.pdf"}>RESUME</a>    
                                    </Button>
                             
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex> 
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}

                    >
                        <Stack as={'nav'} spacing={4}  >
                            {Links.map((link, i) => (
                                <NavLink

                                    key={i}
                                    to={link.id}
                                    name={link.name}
                                    w="xm"
                                    textalign="center"
                                    onClick={() => onClose()}
                                />
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

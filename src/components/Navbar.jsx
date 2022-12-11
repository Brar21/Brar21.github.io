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
    HStack
    
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
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
                        <Box><Heading fontFamily={'mono'}>VARI<span color='red'>NDER</span></Heading></Box>
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
                                    as={'a'}
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
                                    href={'https://drive.google.com/file/d/16yCvFjENxUHmZ7T564TxagBEBtEt9Y4E/view?usp=sharing'}
                                    rel="noreferrer"
                                    download={'https://drive.google.com/file/d/16yCvFjENxUHmZ7T564TxagBEBtEt9Y4E/view?usp=sharing'}
                                >
                                        RESUME
                                    
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
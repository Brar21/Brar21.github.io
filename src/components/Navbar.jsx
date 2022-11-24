import React from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    useColorModeValue,
    Stack,
    useColorMode,
    
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
       text='RESUME'
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
 
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                 <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex boxSize={'xl'}  fontWeight='600' justifyContent={'space-evenly'} alignItems={'center'}>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/about'}>About Me</Link>
                        <Link href='/skills'>Skills</Link>
                        <Link href='/project'>Projects</Link>
                        <Link href='/contact'>contact</Link>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                    bg="whatsapp.500"
                                    color='white'
                                    textDecoration='none'
                                    padding='2 5'>
                                    RESUME
                                </MenuButton>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex> 
             
            </Box>
        </>
    );
}
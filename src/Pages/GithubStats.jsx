import React from 'react'
import GitHubCalendar from "react-github-calendar";
// import Git from "react-github-calender"
import { Box, Heading } from '@chakra-ui/react'
const Github = () => {
    return (
        <Box m={'10rem 5rem'} border="1px solid red" h={'50vh'}>
            <Heading color={'blue.500'} >Github-Stats</Heading>
            <Box px={['2%', '4%', '8%', '16%', '24%']} py={8}>
                <GitHubCalendar
                    username="Brar21"
                    blockSize={10}
                    blockMargin={5}
                    color="teal"
                    fontSize={16}
                    m={40}
                    w='70%'

                />
            </Box>
        </Box>
    )
}

export default Github
import React from 'react'
import GitHubCalendar from "react-github-calendar";
// import Git from "react-github-calender"
import { Box, Heading } from '@chakra-ui/react'
const Github = () => {
    return (
        <Box m={'auto'} w='100%'  >
            <Heading m={10} textAlign={'center'}>Github-Stats</Heading>
            <Box  px={['2%', '4%', '8%', '16%', '24%']} py={8}>
                <GitHubCalendar
                    username="Brar21"
                    blockSize={10}
                    blockMargin={5}
                    color="teal"
                    fontSize={16}
                    m={10}
                    w='150%'
                />
            </Box>
            <Heading m='3rem' textAlign={'center'}>Github_Statitics</Heading>
            <Box w={'60%'} m='auto' display={{base:'column',md:'flex'}} gap='5rem'>
                <Box> &nbsp;<img src="https://github-readme-stats.vercel.app/api/top-langs?username=brar21&show_icons=true&locale=en&layout=compact" alt="Varinder" width={"415px"} height="280px" /></Box>
               
               
                <Box> &nbsp;<img src="https://github-readme-stats.vercel.app/api?username=brar21&show_icons=true&locale=en" alt="Varinder" w="400px" height={500} /></Box></Box>
        </Box>

    )
}

export default Github
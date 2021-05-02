import { Box, Heading, Button, useColorMode } from '@chakra-ui/react'
import React from 'react'

function About() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Box pt="12" color={colorMode === "light" ? "black" : "white"} id="about">
                <Heading pb="8" color={colorMode === "light" ? "black" : "orange"} > About us</Heading>
                <Box ml={[4, 4, 4, 12]} mr={[4, 4, 4, 12]} pl={[4, 4, 4, 12]} pr={[4, 4, 4, 12]}>
                    CoFight Initiative was started by  me Ravindra Bosamiya when I got infacted from COVID. Now I am looking for volunteers to help more and more people in India.

                    It is a non commercial initiative started with an intention of helping people out in whatever skills I have. If you want to reach out and understand more about the initiative, you can get in touch me him on the below handle
                <br />
                    <a href="https://ravindrabosamiya.tech" target="_blank">
                        <Button mt="12" mb="12"
                            colorScheme={'orange.300'}

                            rounded={'full'}
                            px={6}>Get In Touch</Button>
                    </a>
                </Box>
            </Box>
        </>
    )
}

export default About

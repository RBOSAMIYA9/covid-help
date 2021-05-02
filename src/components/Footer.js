import React from 'react'
import { Box, Text, Heading, useColorMode } from '@chakra-ui/react'
import { NavHashLink } from 'react-router-hash-link';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

function Footer() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Box pt="12" pb="8" bg="blackAlpha.100">
                <Box p="2">
                    <NavHashLink to="/#head">
                        <Heading size="xl" >
                            <Text as="span" fontWeight="light" color={colorMode === "light" ? "black" : "white"} >Co</Text>
                            <Text as="span" fontWeight="bold" color="orange.300">Fight</Text></Heading>
                    </NavHashLink>
                </Box>

                <Text>© 2021 Ravindra Bosamiya. All rights reserved</Text>
                <ColorModeSwitcher bg="orange.200" />
            </Box>
        </>
    )
}

export default Footer

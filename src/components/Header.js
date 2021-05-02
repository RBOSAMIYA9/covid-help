import React, { useState } from 'react'
import { Box, Flex, Button, Heading, Spacer, Text, useColorMode, IconButton } from "@chakra-ui/react"
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { NavHashLink } from 'react-router-hash-link';
import {
    // eslint-disable-next-line 
    BrowserRouter as Router,
    Link
} from "react-router-dom";




function Header() {

    // eslint-disable-next-line 
    const { colorMode, toggleColorMode } = useColorMode()
    

    const [display, changeDisplay] = useState('none')

    // const MenuItems = ({ children }) => (
    //     <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    //         {children}
    //     </Text>
    // );

    // const handleToggle = () => setShow(!show);
    return (
        <>
            <Box w="100%" p={4} color="black" id="head">
                <Flex alignItems="center">

                    <Box p="2">
                        <NavHashLink to="/#head">
                            <Heading size="xl" >
                                <Text as="span" fontWeight="light" color={colorMode === "light" ? "black" : "white"} >Co</Text>
                                <Text as="span" fontWeight="bold" color="orange.300">Fight</Text></Heading>
                        </NavHashLink>
                    </Box>


                    <Spacer />

                    <Box alignItems="center" display={['none', 'none', 'flex', 'flex']} >
                        <Flex alignItems="center" justify="space-between">
                            <NavHashLink
                                to="/#about"
                            >
                                <Text ml="12" color={colorMode === "light" ? "black" : "white"} >About</Text>
                            </NavHashLink>
                            <Link to="/search-donors">
                                <Text ml="12" color={colorMode === "light" ? "black" : "white"}>Search Donors</Text>
                            </Link>
                            <Link to="donate-now">
                                <Button ml="12" color="white" colorScheme="orange.300" size="lg">Donate Now</Button>
                            </Link>
                            <ColorModeSwitcher ml="12" bg="orange.200" justifySelf="flex-end" />

                        </Flex>

                    </Box>
                    <IconButton
                        aria-label="Open Menu"
                        size="lg"
                        mr={2}
                        icon={
                            <HamburgerIcon />
                        }
                        onClick={() => changeDisplay('flex')}
                        display={['flex', 'flex', 'none', 'none']}
                        bg="orange.200"
                    />
                </Flex>


                {/* Mobile Content */}
                <Flex
                    w='100vw'
                    display={display}
                    bgColor="gray.50"
                    h="100vh"
                    pos="fixed"
                    top="0"
                    left="0"
                    zIndex={20}
                    overflowY="auto"
                    flexDir="column"
                >
                    <Flex justify="flex-end">
                        <IconButton
                            mt={2}
                            mr={2}
                            aria-label="Open Menu"
                            size="lg"
                            icon={
                                <CloseIcon />
                            }
                            onClick={() => changeDisplay('none')}
                        />
                    </Flex>

                    <Flex
                        flexDir="column"
                        align="center"
                        color="black"
                    >
                        <NavHashLink
                            to="/#about"
                        >
                            <Button
                                as="a"
                                variant="ghost"
                                aria-label="Home"
                                my={5}
                                w="100%"
                                color="black"
                                _hover={{

                                    color: "orange.200",
                                }}
                            >
                                About
                    </Button>
                        </NavHashLink>

                        <Link to="/search-donors">
                            <Button
                                as="a"
                                variant="ghost"
                                aria-label="About"
                                my={5}
                                w="100%"
                                color="black"
                                _hover={{

                                    color: "orange.200",
                                }}
                            >
                                Search Donors
                    </Button>
                        </Link>

                        <Link to="donate-now">
                            <Button
                                as="a"
                                variant="ghost"
                                aria-label="Contact"
                                my={5}
                                w="100%"
                                color="black"
                                _hover={{

                                    color: "orange.200",
                                }}
                            >
                                Donate Now
                             </Button>
                        </Link>




                    </Flex>
                </Flex>

            </Box>



        </>
    )
}

export default Header
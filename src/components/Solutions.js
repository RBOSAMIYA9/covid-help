import React from 'react'
import { Box, Flex, Button, Stack, Heading, Image, Text, useColorMode, IconButton } from "@chakra-ui/react"
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Solutions() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Box mt="8" p="4" color={colorMode === "light" ? "black" : "white"}>
                <Heading mt="12" color={colorMode === "light" ? "black" : "orange"}>Help Others / Get help</Heading>
                <Box display="flex" pb="12" mt="10" flexDirection={["column", "column", "cloumn", "row"]} >
                    <Stack flexGrow="1"
                        flexShrink="1"
                        flexBasis="0"
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        mt="8"

                    >
                        <Text as="h2" fontWeight="semibold" fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}>Want to donate <br /> Plasma</Text>
                        <Text as="p" >Recovered or quarantined patients <br /> of COVID-19 who are willing to donate</Text>

                        <Link to="donate-now">
                            <Button size="lg" variant="outline"
                                _hover={{
                                    boxShadow: "dark-lg"
                                }}
                                colorScheme={colorMode === "light" ? "white" : "orange"}
                                color={colorMode === "light" ? "black" : "orange"}
                            >Donate Now</Button>
                        </Link>
                    </Stack>

                    <Stack flexGrow="1"
                        flexShrink="1"
                        flexBasis="0"
                        spacing={3}
                        mt="8"
                        align={'center'}>
                        <Text as="h2" fontWeight="semibold" fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}>Looking for Plasma <br /> Donor </Text>
                        <Text as="p"  >If you are looking out for a donor, you can <br />find one here</Text>
                        <Link to="search-donors">
                            <Button size="lg" colorScheme="black" variant="outline"
                                _hover={{
                                    boxShadow: "dark-lg"
                                }}
                                colorScheme={colorMode === "light" ? "white" : "orange"}
                                color={colorMode === "light" ? "black" : "orange"}
                            >Find Donors</Button>
                        </Link>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Solutions

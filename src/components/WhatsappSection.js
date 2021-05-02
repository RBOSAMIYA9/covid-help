import React from 'react'
import { Box, Flex, Button, Stack, Heading, Image, Text, useColorMode, IconButton } from "@chakra-ui/react"
import WhatsappChatImage from "../images/whatsappChat.png"
import { FaWhatsapp } from "react-icons/fa";


function WhatsappSection() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Box p="4" color={colorMode === "dark" ? "grey.50" : "black"} >
                <Heading mt="12">Instant Information access </Heading>
                <Box display="flex" mt="10" alignItems="center" flexDirection={["column", "column", "cloumn", "row"]} >
                    <Stack flexGrow="1"
                        flexShrink="1"
                        flexBasis="0"
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        mt="8"
                        order={["2", "2", "2", "1"]}

                    >
                        <Text as="h2" fontWeight="semibold" fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}>Get Instant information  of <br /> <Text as="span" color={colorMode === "dark" ? "orange" : "black"} >donors on your WhatsApp </Text></Text>
                        <Text as="p" noOfLines="2" >Our chatbot will find <br /> plasma donors for you in your city.</Text>
                        <Button size="lg"
                            colorScheme={colorMode === "dark" ? "orange" : "whatsapp"}
                            color={colorMode === "dark" ? "orange" : "whatsapp"}
                            variant="outline" rightIcon={<FaWhatsapp />}
                            _hover={{
                                boxShadow: "dark-lg"
                            }}>Search Donors on </Button>
                    </Stack>
                    <Stack flexGrow="1"
                        flexShrink="1"
                        flexBasis="0"
                        spacing={3}
                        mt="8"
                        align={'center'}
                        order={["1", "1", "1", "2"]}
                    >

                        <Box h="550" as="img" src={WhatsappChatImage} _hover={{
                            boxShadow: "dark-lg"
                        }} ></Box>
                        {/* <Image src={WhatsappChatImage} /> */}

                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default WhatsappSection

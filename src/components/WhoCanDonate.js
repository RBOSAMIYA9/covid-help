import React from 'react'
import { Box, Button, Stack, Heading, Text, useColorMode, UnorderedList, ListItem } from "@chakra-ui/react"
import plasmaChart from '../images/plasmaChart.jpeg'

import {
    // eslint-disable-next-line 
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function WhoCanDonate() {

    // eslint-disable-next-line 
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Box p="4" color={colorMode === "light" ? "gray.900" : "white"}>
                <Heading mt="12" color={colorMode === "light" ? "gray.900" : "orange"}>Who can donate?</Heading>
                <Box display="flex" mt="10" pb="12" flexDirection={["column", "column", "cloumn", "row"]} >
                    <Box as="img" src={plasmaChart}
                        _hover={{
                            boxShadow: "dark-lg"
                        }}
                        pl={[0, 0, 0, 12]}
                        ml={[0, 0, 0, 12]}
                    ></Box>
                    <Stack flexGrow="1"
                        flexShrink="1"
                        flexBasis="0"
                        spacing={3}

                        align={'center'}>
                        <Text as="h3" fontWeight="semibold" fontSize={{ base: 'xl', sm: '3xl', md: '3xl' }}>You can donate if.</Text>
                        <Text as="p" fontSize="md"  >you were tested positive for COVID-19
                           Fully recovered <br />and free of Symptoms for 14 days Between 18-60 years</Text>

                        <Link to="donate-now">
                            <Button size="lg"
                                colorScheme={colorMode === "light" ? "black" : "orange"}
                                color={colorMode === "light" ? "black" : "orange"}

                                variant="outline"
                                _hover={{
                                    boxShadow: "dark-lg"
                                }}>Donate now</Button>
                        </Link>
                        <Text as="h3" mt="12" pt="8" fontWeight="semibold" fontSize={{ base: 'xl', sm: '3xl', md: '3xl' }}>
                            You can  not  donate if</Text>
                        <UnorderedList textAlign="left" pl="12" fontSize="md" >
                            <ListItem>Weight less than 50 kg</ListItem>
                            <ListItem>Females who are pregnant or lactating</ListItem>
                            <ListItem> B.P greater than 140 and diastolic less than 60 or greater than  90</ListItem>
                            <ListItem>Diabetic on insulin</ListItem>
                            <ListItem>Cancer Survivor</ListItem>
                        </UnorderedList>

                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default WhoCanDonate


import React from 'react'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,

    useColorMode
} from '@chakra-ui/react';
import {
    // eslint-disable-next-line 
    BrowserRouter as Router,
    Link
} from "react-router-dom";


function HeroSection() {
    // eslint-disable-next-line 
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Container maxW={'3xl'} id="hero">
            <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Be a Covid Hero<br />
                    <Text as={'span'} color={'orange.400'}>
                        donate Plasma save lives
            </Text>
                </Heading>
                <Text olor={colorMode === "light" ? "gray.500" : "white"}>
                    Plasma from recovered COVID-19 patients can help save lives
          </Text>
                <Stack
                    direction={'column'}
                    spacing={3}
                    align={'center'}
                    alignSelf={'center'}
                    position={'relative'}>
                    <Link to="donate-now">
                        <Button
                            colorScheme={'orange.300'}
                            // bg={'green.400'}
                            rounded={'full'}
                            px={6}
                        >
                            Donate Now
                        </Button>
                    </Link>


                </Stack>
            </Stack>
        </Container>
    )
}

export default HeroSection

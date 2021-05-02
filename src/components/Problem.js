import React from 'react'
import HospitalImage from '../images/hospital-Image.png'
import { Box, Stack, Heading, Image, Text } from "@chakra-ui/react"
function Problem() {
    return (
        <>
            <Heading as="h2">
                Problem
            </Heading>
            <Box ml={[4, 8, 10, 12]} mr={[4, 8, 10, 12]} mt="10" display="flex" alignItems="center" flexDirection={["column", "column", "cloumn", "row"]} >

                <Image objectFit="cover" src={HospitalImage} pl="8" pr="8" />

                <Stack textAlign="left" ml={[4, 8, 10, 12]} mr={[4, 8, 10, 12]} pl={[0, 0, 5, 8]}>
                    <Text as="p" fontSize="md"  >
                        COVID-19 has been on a rampage in our country since the past 1 year. From less than 100 cases in February 2020, we are now having more than ~4,00,000/day cases.

                        The good news is that we have been able to recover more than 90% COVID-19 patients. These patients can help the COVID-19 patients by donating their plasma, as a possible cure.

                        With the vaccination drive underway across the country, there are still a majority of population that still needs to be vaccinated. For this majority, plasma therapy has been developed as an experimental cure for the COVID-19 patients. Plasma therapy has been helping a lot of families recover their loved ones from COVID-19.
                    </Text>
                    <Text as="p" fontWeight="semibold" fontSize="md">
                        But since there are very few plasma donors available, a lot of people who can be saved using this therapy are not getting the required treatment.
                    </Text>
                </Stack>

            </Box>
        </>
    )
}

export default Problem

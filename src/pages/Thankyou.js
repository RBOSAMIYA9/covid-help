import { Heading, Box, Image, Center, Button } from '@chakra-ui/react'
import Greentick from '../images/greenTick.png'
function Thankyou() {
    return (
        <>
            {/* <Header /> */}
            <Box width="800px" borderWidth={1} borderRadius={8} boxShadow="lg" p="12" _hover={{
                boxShadow: "2xl"
            }} >
                <Center>
                    <Image boxSize="16" src={Greentick} />
                </Center>
                <Heading m={2}>Thank You</Heading>
                <p>Thank you for filling the form. Our volenteers will contact you for varification.</p>
                <a href="/">
                    <Button mt={6} colorScheme="orange.300">Go To HomePage</Button>
                </a>

            </Box>
            {/* <Footer /> */}

        </>
    )
}

export default Thankyou

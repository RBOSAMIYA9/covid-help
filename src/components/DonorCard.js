import { Box, Grid, VStack, Text, Badge } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { BiPhone } from 'react-icons/bi'
import * as moment from 'moment';
import './custom.css'


function DonorCard({ data }) {
    return (
        <>
            <Box width={['100%', 'md', 'lg', 'md']} pl={[3, 3, 8, 8]} pr={[3, 3, 8, 8]} pt="8" pb="8"
                justifyContent={['center', 'center', 'center', 'flex-start']} className="cardCss">
                <Box htmlFor="card" p="15px" borderRadius="md" shadow="lg" _hover={{
                    boxShadow: "2xl"
                }}
                    borderRadius="lg"
                    bg="orange.50"
                    color="black"
                    width={['', '', '100%', '']}

                >
                    <VStack alignItems="flex-start">
                        <Box display="flex" width="100%" justifyContent="space-between">
                            <Badge p="1" bg={data.status === "verified" ? "green.300" : "orange.200"} color="black">{data.status}</Badge>
                            <Text as="span" fontSize="sm"><b>Updated:</b> {Math.round(moment.duration(moment().diff(data.updatedAt.toDate())).as('hours'))} Hours Ago</Text>

                        </Box>
                        <Text>
                            {data.firstName}
                        </Text>
                        <Box d="flex" width="100%" justifyContent="space-between">
                            <Box display="flex" alignItems="center">
                                <AiOutlineHeart />

                                <span> &nbsp; {data.bloodGroup.toUpperCase()}</span>
                            </Box>
                            <Box d="flex" alignItems="center">
                                <GoLocation />

                                <span> &nbsp; {data.cityName},{data.state}</span>
                            </Box>
                        </Box>
                        <Box>
                            <Box d="flex" alignItems="center" border="1px" borderColor="gray.200" p="2">
                                <BiPhone />&nbsp;<a href={"tel:"+data.mobileNo}>{data.mobileNo}</a>
                            </Box>
                        </Box>
                    </VStack>
                </Box>
            </Box>
        </>
    )
}

export default DonorCard

import React from 'react'
import { Accordion, AccordionButton, useColorMode, Heading, AccordionPanel, AccordionItem, AccordionIcon, Box } from "@chakra-ui/react"


function Faqs() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>


            <Box pb="12">
                <Heading  color={colorMode === "light" ? "black" : "orange"} pt="12" mb="12">Frequently Asked questions</Heading>
                <Box ml={[4, 4, 4, 12]} mr={[4, 4, 4, 12]} pl={[4, 4, 4, 12]} 
                pr={[4, 4, 4, 12]}  >
                    <Accordion allowMultiple >
                        <AccordionItem >
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        What is Plasma ?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Plasma is in everyone. Plasma  is the colourless liquid part of blood in which the blood cells  viz. RBCs, WBCs, Platelets and other cellular components  etc float. It is single largest component of the blood. It comprises 55% of the blood in body. And it contains water , salts, enzymes, antibody and other proteins. Different constituents of Plasma perform different  important functions in the body. Antigens are molecules capable of stimulating an immune response. Antibodiesare proteins produced by immune system. Antibodies help to fight the disease.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Process of donating plasma?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Blood is drawn from the donor, plasma is separated from blood by special procedures and is administered in the blood of the recipient.The process for donating plasma is similar to donating blood and takes about an hour. Plasma donors are hooked up to a small device that removes plasma while simultaneously returning red blood cells to their bodies. Unlike regular blood donation in which donors have to wait for red blood cells to replenish between donations,plasma can be donated more frequently, as often as twice a week,it said.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        What is Convalescent plasma therapy?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Plasma therapy uses antibodies found in the blood from recovered patients  to introduce to those under treatment
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        When was it widely used?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                The plasma therapy was most famously used during the 1918 Spanish flu pandemic. It was also used during the Ebola epidemic, which started in 2013 and in 2003 against SARS. Even now, there is no vaccine or cure for SARS. The plasma therapy is also used against measles, bacterial pneumonia and numerous other infections before modern medicine came along.                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Is it safe to donate Plasma?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Blood and plasma have been used to treat many other conditions, and they're usually very safe. The risk of contracting COVID-19 infection from receiving convalescent plasma therapy  is very low because the plasma donor has fully recovered from the infection.                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        What is Antibody Test?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                An antibody test is a screening for antibodies in blood. It is also called a serology test.The antibody test isn’t checking for the virus itself. Instead, it looks to see whether your immune system -- your body’s defense against illness -- has responded to the infection.
                                </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        What’s the Difference Between a Coronavirus Test and an Antibody Test?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                A coronavirus test, sometimes called a diagnostic test, looks for signs of active virus. It’s simpler and faster than an antibody test. But it tells you only if you have the virus in your body at the moment when you’re tested.An antibody test shows that you had the virus at some point in the past. It could be gone, or you could still be contagious.
                                </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        How many days a recovered body can take to develop antibody?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Antibodies develops in 14  to 28 days, and it will last till 2-3 months.
                                </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
        </>
    )
}

export default Faqs

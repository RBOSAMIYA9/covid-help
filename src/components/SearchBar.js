import { useState } from 'react'
import { Heading, Center, Select,  Text, useColorMode, Button, Box } from '@chakra-ui/react'
import AutoCompleteSearchBar from '../components/AutoCompleteSearchBar'
import { useForm, Controller } from "react-hook-form";



// const items = [
//     'Neptunium', 
//     'Plutonium',
//     'Americium',
//     'Curium',
//     'Berkelium',
//     'Californium',
//     'Einsteinium',
//     'Fermium',
//     'Mendelevium',
//     'Nobelium',
//     'Lawrencium',
//     'Rutherfordium',
//     'Dubnium',
//     'Seaborgium',
//     'Bohrium',
//     'Hassium',
//     'Meitnerium',
//     'Darmstadtium',
//     'Roentgenium',
//     'Copernicium',
//     'Nihonium',
//     'Flerovium',
//     'Moscovium',
//     'Livermorium',
//     'Tennessine',
//     'Oganesson',
// ]



function SearchBar({ list, setterMethod }) {

    // eslint-disable-next-line 
    const { colorMode, toggleColorMode } = useColorMode()
    const { handleSubmit, register, setValue, control } = useForm();
    
    const [showError, setShowError] = useState(false);



    const onSubmit = (data) => {

        console.log("data submitd in searchbar", data, "cityName", data.cityName)
        if ((data.cityName === undefined) || data.bloodGroup === "") {
            // show erro
            setShowError(true);
        }
        else {
            setterMethod(data);
            setShowError(false);
        }


    };

    const handleCityChange = (e) => {
        //city is not empty
        console.log("citychange", e);
        setValue("cityName", e);
    };
    return (
        // bg="orange.50"
        <Box pt="12" color="black">
            <Heading fontWeight="400" color={colorMode === "light" ? "black" : "orange.300"} >Search Plasma Donors</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Center>

                    <Box display="flex" width={["90%", "80%", "70%", "60%"]}
                        color={colorMode === "light" ? "black" : "white"}
                        mt={8} pb="12">

                        {/* <AutoCompleteSearchBar
                            flexGrow="1"
                            flexShrink="1"
                            flexBasis="0"
                            items={items} /> */}
                        <Controller
                            name="cityName"
                            control={control}
                            render={({ onChange }) => (
                                <AutoCompleteSearchBar
                                    items={list}
                                    onChange={handleCityChange}
                                    flexGrow="1"
                                    flexShrink="1"
                                    flexBasis="0"
                                />
                            )}
                        />

                        <Select
                            style={{ borderColor: "gray" }}
                            border="1px"
                            flexGrow="1"
                            flexShrink="1"
                            flexBasis="0"

                            {...register("bloodGroup")}

                            placeholder="--Blood Group--" borderRadius="0" borderColor={colorMode === "light" ? "grey.50" : "black"}>
                            <option value="a+">A+ (Positive)</option>
                            <option value="a-">A- (Negative)</option>
                            <option value="b+">B+(Positive)</option>
                            <option value="b-">B-(Negative)</option>
                            <option value="o+">O+(Positive)</option>
                            <option value="o-">O-(Negative)</option>
                            <option value="ab+">AB+(Positive)</option>
                            <option value="ab-">AB-(Negative)</option>
                        </Select>

                        <Button type="submit" borderRadius="0" bg="orange.300" size="md" p="5" borderRightRadius="md">Search</Button>

                    </Box>

                </Center>
            </form>
            {showError && <Text color="red">please enter values!</Text>}
        </Box>
    )
}

export default SearchBar

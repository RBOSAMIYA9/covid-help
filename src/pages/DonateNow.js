import {
  Heading, Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Stack,
  Select, Radio, RadioGroup,
  useColorMode
} from '@chakra-ui/react';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import Header from '../components/Header';
import csc from 'country-state-city';
import { projectFirestore, timeStamp } from "../firebase/firebaseConfig";



import AutoCompleteSearchBar from '../components/AutoCompleteSearchBar'
import { useForm, Controller } from 'react-hook-form';
import Thankyou from './Thankyou'




function DonateNow() {

  // eslint-disable-next-line 
  const { colorMode, toggleColorMode } = useColorMode()

  const { handleSubmit, register, setValue, control } = useForm();
  const [city, setCity] = useState("")
  const [filled, setFilled] = useState(false);



  const onSubmit = data => {

    console.log(data);
    data.status = "Not Varifed"
    console.log("form success", data)
    var collectionRef = projectFirestore.collection('donorData')

    collectionRef.add({ ...data, "createdAt": timeStamp(), "updatedAt": timeStamp() }).then((ref) => {
      console.log("ref:", ref);
      setFilled(true)
    })

    console.log("data", data);
    // dbref.add()




  }
  let states = csc.getStatesOfCountry('IN')
  let cities = csc.getCitiesOfState("IN", city)
  // console.log("cityies", cities);
  // console.log("states", states);

  const handleChange = (e) => {
    // console.log("event", e.target.value);

    console.log(e.target.value)
    var state = states.filter(item => item.name.includes(e.target.value))
    console.log(state[0].isoCode)
    setCity(state[0].isoCode)
    console.log("city", city)
  };

  const handleCityChange = (e) => {
    console.log("cityChange", e)
    setValue("cityName", e);
  }

  return (
    <>
      <Header />



      {filled ? (
        <Center>
          <Box mt={6} p="12" minHeight="md">
            <Thankyou />
          </Box>
        </Center>
      ) : (
        <>
          <Heading>
            Donate Plasma
          </Heading>
          <Text as="p">
            Please fill the following form.
          </Text>
          <Center>
            <Box p={12} mt="8" width="800px" borderWidth={1} borderRadius={8} boxShadow="lg" mb="12">
              <form onSubmit={handleSubmit(onSubmit)} >
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <Input {...field} />}
                  />
                </FormControl>
                <FormControl isRequired mt={6}>
                  <FormLabel>Age</FormLabel>
                  <Input
                    type="number"
                    size="lg"
                    name="age"
                    {...register("age", { required: true, maxLength: 2 })}

                  />
                </FormControl>
                <FormControl isRequired mt={6}>
                  <FormLabel>Contact No</FormLabel>
                  <Input
                    type="tel"
                    size="lg"
                    name="mobileNo"
                    {...register("mobileNo", { required: true, minLength: 10, maxLength: 10 })}
                  />
                </FormControl>


                <FormControl isRequired mt="8">
                  <FormLabel>Blood Group</FormLabel>
                  <RadioGroup >
                    <Stack spacing={5} direction="column">
                      <Radio
                        {...register("bloodGroup")} name="bloodGroup"
                        value="a+">
                        A +ve
                  </Radio>
                      <Radio
                        {...register("bloodGroup")} name="bloodGroup"

                        value="a-">
                        A -ve
                  </Radio>
                      <Radio
                        name="bloodGroup"
                        {...register("bloodGroup")}

                        value="b+">
                        B +ve
                  </Radio>
                      <Radio
                        {...register("bloodGroup")} name="bloodGroup"
                        // ref={register}  
                        value="b-">
                        B -ve
                  </Radio>
                      <Radio
                        {...register("bloodGroup")} name="bloodGroup"

                        value="ab+">
                        AB +ve0
                  </Radio>
                      <Radio
                        {...register("bloodGroup")} name="bloodGroup"

                        value="ab-">
                        AB -ve
                  </Radio>
                      <Radio
                        {...register("bloodGroup")} name="bloodGroup"

                        value="o+">
                        O +ve
                  </Radio>
                      <Radio
                        {...register("bloodGroup")} name="bloodGroup"

                        value="o-">
                        O -ve
                  </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl mt={6} textAlign="left">
                  <FormLabel>When you tested Positive for Covid19</FormLabel>
                  <Input
                    type="date"
                    {...register('setStringDate', { valueAsDate: true })}
                    className="date"
                  />
                </FormControl>


                <FormControl id="state" mt={6}>
                  <FormLabel>State</FormLabel>
                  <Select placeholder="Select State"
                    {...register("state")}
                    onChange={(e) => {

                      handleChange(e)
                    }}
                    name="state"
                  // control={control}
                  >
                    {states.map(state => <option value={state.name}>{state.name}</option>)}
                  </Select>
                </FormControl>


                <FormControl id="City" mt={6}>
                  <FormLabel>City</FormLabel>
                  <Controller
                    name="cityName"
                    control={control}
                    render={({ onChange }) => <AutoCompleteSearchBar
                      items={cities.map((city) => city.name)}
                      // onChange={(e) => handleCityChange(e)}
                      onChange={handleCityChange}
                      color={colorMode === "light" ? "black" : "white"}
                    />}

                  />
                </FormControl>




                <Button mt={6} colorScheme="orange.400" type="submit">Submit</Button>

              </form>
            </Box>
          </Center>
        </>
      )}

      <Footer />
    </>
  )
}


export default DonateNow

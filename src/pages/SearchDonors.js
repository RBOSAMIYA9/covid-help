import { useState, useEffect } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import { Box, Text } from '@chakra-ui/react'
import DonorCard from '../components/DonorCard'
import Footer from '../components/Footer'
import { projectFirestore } from '../firebase/firebaseConfig'


function SearchDonors() {

    const [cityList, setcityList] = useState([])
    const [data, setData] = useState({})
    const [dataFromDb, setDataFromDb] = useState([])
    const [chunkedArrayState, setChunkedArrayState] = useState([])
    const [showMessage, setShowMessage] = useState(false)
    const [showWelcomemessage, setShowWelcomeMessage] = useState(false)




    useEffect(() => {
        setShowWelcomeMessage(true);
        var dbref = projectFirestore.collection('donorData');
        dbref.onSnapshot((snapshot) => {
            console.log("snapshot:  ", snapshot.docs);
            var data = snapshot.docs.map((document) => (
                {
                    id: document.id,
                    city: document.data().cityName
                }
            ))
            var uniqueCities = getUnique(data.map((cities) => cities.city))
            // console.log("uniqueCities", uniqueCities);
            setcityList(uniqueCities)
        })



        // eslint-disable-next-line
    }, [])



    function getUnique(arr) {
        console.log("inside uniquie cities");
        let unquieCities = [];

        // loop through array
        for (let i of arr) {
            if (unquieCities.indexOf(i) === -1) {
                unquieCities.push(i);
            }
        }
        return unquieCities
    }
    const makeChunk = (dataFromDatabase) => {

        const chunkedArray = []
        var chunk;
        while (dataFromDatabase.length > 0) {

            chunk = dataFromDatabase.splice(0, 3)
            console.log("chunk", chunk);
            chunkedArray.push(chunk)
        }
        console.log("chunked array", chunkedArray);
        console.log("dataFromDb state", dataFromDb);
        setChunkedArrayState(chunkedArray)
    }
    console.log("chunked  array data ", chunkedArrayState);


    useEffect(() => {

        setChunkedArrayState([])
        console.log("data in parent ", data);
        var collectionRef = projectFirestore.collection('donorData')
        if (!(Object.keys(data).length === 0)) {
            setShowWelcomeMessage(false)
            console.log("data inside if not null ", data);
            collectionRef.where("cityName", '==', data.cityName).where('bloodGroup', '==', data.bloodGroup).get().then(

                (snapshot) => {

                    if (snapshot.docs.length > 0) {
                        setShowMessage(false)
                        console.log("snapshot not null");
                        console.log("snapshot", snapshot)
                        const data = snapshot.docs.map(doc => doc.data())
                        makeChunk(data)
                        setDataFromDb(data)

                    }
                    else {
                        setShowMessage(true);
                    }

                }
            )
        }

        // eslint-disable-next-line 
    }, [data])

    return (
        <>
            <Header />


            <SearchBar list={cityList} setterMethod={setData} />

            <Box minHeight="lg" justifyContent="center">

                {
                    showWelcomemessage ? <Text as="h1">Enter city name and bloodGroup to get data</Text> : (
                        showMessage ? <Text as="h2"> Currently we don't have any data for this city</Text> :
                            (<>

                                {chunkedArrayState.map((data) => (
                                    <Box d="flex" flexDirection={['column', 'column', 'column', 'row']}  >
                                        { data.map((doc) => (
                                            <>
                                                {/* {console.log("doc:", doc.updatedAt.toDate())} */}

                                                <DonorCard
                                                    flexGrow="1"
                                                    flexShrink="1"
                                                    flexBasis="0"
                                                    data={doc}
                                                />
                                            </>
                                        ))}
                                    </Box>
                                ))}


                            </>)

                    )
                }
                {/* {
                } */}

            </Box>
            {/* <Box minHeight="lg" justifyContent="center">

                hy :{renderContent()} 
                <Box d="flex" justifyContent="center" flexDirection={['column', 'column', 'column', 'row']}>
                    <DonorCard
                        flexGrow="1"
                        flexShrink="1"
                        flexBasis="0" />

                    <DonorCard
                        flexGrow="1"
                        flexShrink="1"
                        flexBasis="0" />

                    <DonorCard
                        flexGrow="1"
                        flexShrink="1"
                        flexBasis="0" />
                </Box>
                 <Box d="flex" flexDirection={['column', 'column', 'column', 'row']}>
                    <DonorCard
                        flexGrow="1"
                        flexShrink="1"
                        flexBasis="0" />

                    <DonorCard
                        flexGrow="1"
                        flexShrink="1"
                        flexBasis="0" />

                    <DonorCard
                        flexGrow="1"
                        flexShrink="1"
                        flexBasis="0" />
                </Box>
            </Box> */}
            <Footer />
        </>
    )
}

export default SearchDonors

import React from 'react';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';

import Home from './pages/Home'
import { extendTheme } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DonateNow from './pages/DonateNow'
import SearchDonors  from './pages/SearchDonors'

const theme = extendTheme({
  styles: {
    global: {
      Button: {
        _hover: {
          backgroundColor: "orange.200"
        },
        backgroundColor: "orange.300"
      }
    }
  }

})



const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};



function App() {
  return (
    // theme={theme}
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Router>


          <Switch>
            <Route path="/search-donors">
              <SearchDonors/>
            </Route>
            <Route path="/donate-now">
              <DonateNow/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          
          </Switch>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;

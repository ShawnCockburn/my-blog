import React, { useState } from "react";
import {
  Box,
  Heading,
  Grommet
} from 'grommet';
import { theme } from "./Theme";
import Toggle from "./Components/Toggle";
import Nav from "./Navigation/Nav";
import { useHistory } from "react-router-dom";


const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    style={{ zIndex: '1' }}
    {...props}
  />
);

const App = () => {
  let history = useHistory();
  const [darkmode, setDarkmode] = useState(false);
  return (
    <Grommet theme={theme} themeMode={darkmode ? "dark" : "light"} full>
          <Box fill>
            <AppBar>
                <Heading level='3' margin='none' onClick={()=>history.push("/")} style={{cursor:"pointer"}}>Shawn's Blog</Heading>
              <Toggle reverse label={darkmode ? "Dark Mode" : "Light Mode"} checked={darkmode} onChange={() => setDarkmode(!darkmode)} />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Nav />
            </Box>
          </Box>
    </Grommet>
  );
}

export default App;

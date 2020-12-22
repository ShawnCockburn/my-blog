import React, { useState } from "react";
import {
  Box,
  Heading,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import { theme } from "./Theme";
import Toggle from "./Components/Toggle";
import Home from "./Screens/Home";


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
  const [darkmode, setDarkmode] = useState(false);
  return (
    <Grommet theme={theme} themeMode={darkmode ? "dark" : "light"} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level='3' margin='none'>Blog</Heading>
              <Toggle reverse label={darkmode ? "Dark Mode" : "Light Mode"} checked={darkmode} onChange={() => setDarkmode(!darkmode)} />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Home/>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;

import React from 'react'
import {
    Box,
    ResponsiveContext
} from 'grommet';
import LatestPost from './Sections/LatestPost';
import AllPosts from './Sections/AllPosts';

const Home = () => {
    return (
        <Box flex align='center'>
            <ResponsiveContext.Consumer>
                {size => (
                    size !== "xsmall" ? <LatestPost /> : null
                )}
            </ResponsiveContext.Consumer>
            <AllPosts />
        </Box>
    )
}

export default Home
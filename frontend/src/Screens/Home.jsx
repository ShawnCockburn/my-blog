import React from 'react'
import { Heading, ResponsiveContext } from 'grommet';
import LatestPost from './Sections/LatestPost';
import AllPosts from './Sections/AllPosts';
import FadeInBox from '../Components/FadeInBox';

const Home = () => {
    return (
        <FadeInBox flex align='center'>
            <ResponsiveContext.Consumer>
                {size => (
                    size !== "xsmall" ? <>
                    <Heading level="3">
                        Featured Post
                    </Heading>
                    <LatestPost /> 
                    </>: null
                )}
            </ResponsiveContext.Consumer>
            <AllPosts />
        </FadeInBox>
    )
}

export default Home
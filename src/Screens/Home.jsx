import React from 'react'
import PostCard from "../Components/PostCard";
import {
    Box,
} from 'grommet';
import LatestPost from './Sections/LatestPost';
import AllPosts from './Sections/AllPosts';

const Home = () => {
    return (
        <Box flex align='center'>
            <LatestPost/>
            <AllPosts/>
        </Box>
    )
}

export default Home
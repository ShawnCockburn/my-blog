import React from 'react'
import PostCard from "../../Components/PostCard";
import {
    Box,
} from 'grommet';

const LatestPost = () => {
    return (
        <section>
            <Box flex align='center' justify="center" margin={{vertical:"medium"}}>
                <PostCard title="This is a test."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    imageURL="https://picsum.photos/800"
                    author="Shawn Cockburn"
                    date="December 18, 2020"
                    cardSize="large"
                />
            </Box>
        </section>
    )
}

export default LatestPost
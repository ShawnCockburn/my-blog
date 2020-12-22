import React from 'react'
import PostCard from "../../Components/PostCard";
import {
    Box, Heading, TextInput
} from 'grommet';
import { Search } from 'grommet-icons';


const AllPosts = () => {
    return (
        <section>
            <Box flex align='center' justify="center" margin={{ vertical: "medium" }}>
                <Heading level="3">
                    All Posts
        </Heading>
                <Box width="medium" gap="medium" elevation="small" round="xsmall">
                    <TextInput plain type="search" icon={<Search />} placeholder="search ..." reverse size="small" />
                </Box>
            </Box>
            <Box flex direction="row" align='center' justify="center" margin={{ vertical: "medium" }}>
                {[1, 2, 3].map(i => (
                    <PostCard title="This is a test."
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        imageURL="https://picsum.photos/800"
                        author="Shawn Cockburn"
                        date="December 18, 2020"
                        cardSize="medium"
                        margin={{horizontal: "small"}}
                    />
                ))}
            </Box>
        </section>
    )
}

export default AllPosts
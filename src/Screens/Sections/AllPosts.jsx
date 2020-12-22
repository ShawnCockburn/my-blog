import React from 'react'
import PostCard from "../../Components/PostCard";
import {
    Box, Heading, TextInput, Grid, ResponsiveContext
} from 'grommet';
import { Search } from 'grommet-icons';

// If the size is small, only see 1 column
// If the size is medium, only see 2 columns
// If the size is either large or xlarge, see 3 columns
const columns = {
    small: 1,
    medium: 2,
    large: 3,
    xlarge: 4,
};


const AllPosts = () => {
    return (
        <section>
            <Box flex align='center' justify="center" margin={{ vertical: "medium" }}>
                <Heading level="3">
                    All Posts
        </Heading>
                <Box width={{max: "90%", width:"medium"}} gap="medium" elevation="small" round="xsmall">
                    <TextInput plain type="search" icon={<Search />} placeholder="Search ..." reverse size="small" />
                </Box>
            </Box>
            <Box flex direction="row" align='center' justify="center" margin={{ vertical: "medium" }} fill>
                <ResponsiveContext.Consumer>
                    {size => (
                        <Grid columns={{
                            count: columns[size],
                            size: 'auto',
                        }}
                            gap="small"
                            gap="small"
                            fill
                            justify="center"
                        >
                            {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                <PostCard title="This is a test."
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    imageURL="https://picsum.photos/800"
                                    author="Shawn Cockburn"
                                    date="December 18, 2020"
                                    cardSize={size === "xsmall" ? "small" : "medium"}
                                // margin={{ horizontal: "small" }}
                                />
                            ))}
                        </Grid>
                    )}
                </ResponsiveContext.Consumer>
            </Box>
        </section>
    )
}

export default AllPosts
import React, {useState,useEffect} from 'react'
import PostCard from "../../Components/PostCard";
import {
    Box, Heading, TextInput, Grid, ResponsiveContext
} from 'grommet';
import { Search } from 'grommet-icons';
import {getAllPosts} from '../../Api/api';

// If the size is small, only see 1 column
// If the size is medium, only see 2 columns
// If the size is either large or xlarge, see 3 columns
const columns = {
    small: 1,
    medium: 2,
    large: 3,
    xlarge: 4,
};

const PostGrid = props => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>
    getAllPosts()
      .then(fetchedPosts => setPosts(fetchedPosts))
      .catch(e => console.log(e))
  );
    return posts === [] ? (<Heading>Loading</Heading>) : (
        <Box flex direction="row" align='center' justify="center" margin={{ vertical: "small" }} >
            <ResponsiveContext.Consumer>
                {size => (
                    <Grid
                        columns={{
                            count: columns[size],
                            size: "auto",
                        }}
                        gap="small"
                        justify="center"
                        responsive
                    >
                        {posts.map(post => (
                            <PostCard
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                description={post.description}
                                imageURL={post.imageURL}
                                author={post.author}
                                date={post.publishedDate}
                                cardSize={size === "xsmall" ? "small" : "medium"}
                            // margin={{ horizontal: "small" }}
                            />
                        ))}
                    </Grid>
                )}
            </ResponsiveContext.Consumer>
        </Box>
    );
};

const AllPosts = () => {
    return (
        <section>
            <Box flex align='center' justify="center" margin={{ vertical: "medium" }}>
                <Heading level="3">
                    All Posts
                </Heading>
                <Box width={{ max: "90%", width: "medium" }} gap="medium" elevation="small" round="xsmall">
                    <TextInput plain type="search" icon={<Search />} placeholder="Search ..." reverse size="small" />
                </Box>
            </Box>
            <PostGrid />
        </section>
    )
}

export default AllPosts
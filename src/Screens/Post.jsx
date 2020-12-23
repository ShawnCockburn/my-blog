import { Box, Heading, Text } from 'grommet'
import React, { useState } from 'react'
import BlogMarkdown from './Sections/BlogMarkdown';

//test data
import { newPosts } from '../testdata'


const getPost = async () => {
    //TODO: fetch data from server via the post id in the url
    return newPosts
};

const Post = props => {

    const {
        postID
    } = props.match.params;

    const [post, setPost] = useState(undefined);

    getPost().then(p => setPost(p));

    return post === undefined ? (<Heading>Loading...</Heading>) :
        (
            <Box flex align='center'>
                <Box width={{ max: "90%", width: "large" }} align="center">
                    <Box margin={{ vertical: "4rem" }} align="center">
                        <Heading level="2">{post.title}</Heading>
                        <Text size="xsmall">
                            {`${post.author} ${post.publishedDate}`}
                        </Text>
                    </Box>
                    <BlogMarkdown children={post.content} pad={{ vertical: "xlarge" }}/>
                </Box>
            </Box>
        )
}

export default Post
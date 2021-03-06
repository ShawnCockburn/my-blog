import { Box, Heading, Text } from 'grommet'
import React, { useState, useEffect } from 'react'
import BlogMarkdown from './Sections/BlogMarkdown';
import {getPost} from '../Api/api';
import FadeInBox from '../Components/FadeInBox';
import hdate from "human-date";
import NoMatch from "./NoMatch";


const Post = props => {

    const {
        postID
    } = props.match.params;

    const [post, setPost] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() =>
    getPost(postID)
      .then(fetchedPost => setPost(fetchedPost))
      .catch(e => setError(true))
  ,[postID]);

    return error? (<NoMatch />) : !post ? (<NoMatch/>) :
        (
            <FadeInBox flex align='center'>
                <Box width={{ max: "90%", width: "large" }}>
                    <Box margin={{ vertical: "4rem" }} align="center">
                        <Heading level="2">{post.title}</Heading>
                        <Text size="xsmall">
                            {`${post.author}, ${hdate.prettyPrint(post.date)}`}
                        </Text>
                    </Box>
                    <BlogMarkdown children={post.content} pad={{ vertical: "xlarge" }} width="100%"/>
                </Box>
            </FadeInBox>
        )
}

export default Post
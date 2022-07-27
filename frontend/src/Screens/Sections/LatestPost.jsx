import React, { useEffect, useState } from 'react'
import PostCard from "../../Components/PostCard";
import {
    Box,
    ResponsiveContext
} from 'grommet';
import {getFeaturedPost} from '../../Api/api';

const LatestPost = () => {

    const [post, setPost] = useState(false);

    useEffect(() =>
        getFeaturedPost()
            .then(fetchedPost => setPost(fetchedPost))
            .catch(e => console.log(e))
    ,[]);

    return post?(
        <section>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box flex align='center' justify="center" margin={{ vertical: "medium" }}>
                        <PostCard
                            key={post._id}
                            _id={post._id}
                            title={post.title}
                            description={post.description}
                            imageURL={post.imageURL}
                            author={post.author}
                            date={post.date}
                            cardSize={size === "small" || size === "xsmall" ? "medium" : "large"}
                        />
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </section>
    ):(<></>)
}

export default LatestPost
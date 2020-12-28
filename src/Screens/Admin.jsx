import { Heading, Box, Button, Tabs, Tab } from 'grommet'
import React, { useState, useEffect } from 'react'
import FadeInBox from '../Components/FadeInBox'
import firebase from "firebase/app";
import { Link } from 'react-router-dom';
import PostList from '../Components/PostList';
import { getAllPostsAdmin } from '../Api/api';
import { useHistory } from "react-router-dom";

const Admin = () => {
    let history = useHistory();

    const [posts, setPosts] = useState([]);

    useEffect(() =>
        getAllPostsAdmin()
            .then(fetchedPosts => setPosts(fetchedPosts))
            .catch(e => console.log(e))
        , []);

    const optionsTab = (
        <Box fill pad={{ vertical: "small" }}>
            <Button label="Logout" color="status-critical" primary onClick={() => firebase.auth().signOut()} />
        </Box>
    )

    const postsTab = (
        <Box fill align="center" pad={{ vertical: "small" }}>
            <Link to="/new-post">
                <Button label="New Post" />
            </Link>
            <Box fill flex>
                <PostList data={posts} flex
                    onClickRow={({ datum }) => {
                        history.push({
                            pathname: '/edit-post',
                            post: {...datum}
                        });
                    }}
                />
            </Box>
        </Box>
    )


    const [index, setIndex] = useState(0);
    const onActive = nextIndex => setIndex(nextIndex);
    return (
        <FadeInBox flex fill align="center">
            <Heading level="3">
                Admin
            </Heading>
            <Tabs activeIndex={index} onActive={onActive} flex>
                <Tab title="Options">
                    {optionsTab}
                </Tab>
                <Tab title="Posts">
                    {postsTab}
                </Tab>
            </Tabs>
        </FadeInBox>
    )
}

export default Admin

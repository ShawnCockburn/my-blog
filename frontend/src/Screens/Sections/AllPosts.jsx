import React, { useState, useEffect } from 'react'
import PostCard from "../../Components/PostCard";
import {
    Box, Heading, TextInput, Grid, ResponsiveContext, Keyboard
} from 'grommet';
import { Search } from 'grommet-icons';
import { getAllPosts } from '../../Api/api';
import TopicFilter from '../../Components/TopicFilter';

// If the size is small, only see 1 column
// If the size is medium, only see 2 columns
// If the size is either large or xlarge, see 3 columns
const columns = {
    small: 1,
    medium: 2,
    large: 3,
    xlarge: 4,
};

const RenderPost = ({ _id, title, description, imageURL, author, date, size }) => (
    <PostCard
        key={_id}
        _id={_id}
        title={title}
        description={description}
        imageURL={imageURL}
        author={author}
        date={date}
        cardSize={size === "xsmall" ? "small" : "medium"}
        // cardSize={"medium"}
    />
)

const PostGrid = props => {
    const {
        searchTags,
        topic
    } = props;

    const [posts, setPosts] = useState([]);

    //TODO:Improve the search functionality
    const [filteredPosts, setFilteredPosts] = useState([]);
    useEffect(() =>
        getAllPosts()
            .then(fetchedPosts => setPosts(fetchedPosts))
            .catch(e => console.log(e))
    ,[]);

    useEffect(() => {
        setFilteredPosts(
            posts.filter(p=> {
                const containsTag = p.tags.some(tag => {
                    return searchTags.some(sTag => {
                        return tag.toLowerCase().includes(sTag.toLowerCase());
                    });
                })
                return containsTag;
            })
        );
    }, [posts, searchTags]);

    //TODO:addtopic filtering

    return posts === [] ? (<Heading>Loading</Heading>) : (
        <Box flex direction="row" align='center' justify="center" margin={{ vertical: "small" }}>
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
                        {/* TODO: fix this search functionality */}
                        {filteredPosts.length > 0 ? filteredPosts.map(post => (<RenderPost key={post._id} size={size} {...post} />)) :
                         posts.map(post => (<RenderPost key={post._id} size={size} {...post} />))}
                    </Grid>
                )}
            </ResponsiveContext.Consumer>
        </Box>
    );
};

const AllPosts = () => {
    const [searchText, setSearchText] = useState("");
    const [searchTags, setSearchTags] = useState([]);

    const [selectedTopic, setSelectedTopic] = useState(undefined);

    const updateTags = () => {
        setSearchTags(searchText.split(" "));
    };

    const onTopicSelect = topic => {
        setSelectedTopic(topic);
    };

    return (
        <section>
            <Box flex align='center' justify="center" margin={{ vertical: "medium" }}>
                <Heading level="3">
                    All Posts
                </Heading>
                <Box width={{ max: "90%", width: "medium" }} gap="medium" elevation="small" round="xsmall">
                    <Keyboard onEnter={updateTags}>
                        <TextInput plain type="search" icon={<Search onClick={updateTags} />} placeholder="Search ..." reverse size="small" value={searchText} onChange={({ target: { value } }) => setSearchText(value)} />
                    </Keyboard>
                </Box>
            </Box>
            {/* TODO: FILTERS */}
            {/* <TopicFilter topics={[]} selectedTopic={selectedTopic} onTopicSelect={onTopicSelect}/> */}
            <PostGrid searchTags={searchTags} topic={selectedTopic}/>
        </section>
    )
}

export default AllPosts
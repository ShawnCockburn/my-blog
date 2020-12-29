import { FormField, Form, Box, Button, TextArea, TextInput, Text, Tabs, Tab, CheckBox, MaskedInput } from 'grommet'
import React, { useState } from 'react';
import FadeInBox from '../Components/FadeInBox';
import CustomMarkdown from '../Components/CustomMarkdown';
import TagTextField from '../Components/TagTextField';
import Post from '../Api/Datamodels/Post'
import { editPost, newPost } from '../Api/api';
import Loading from '../Components/Loading';
import { Redirect } from 'react-router-dom';


const border = { color: 'brand', size: 'small' };

const EditPost = ({ location: { post } }) => {

    const _id = post ? post._id : undefined;

    const [content, setContent] = useState(_id ? post.content : "");
    const [title, setTitle] = useState(_id ? post.title : "");
    const [description, setDescription] = useState(_id ? post.description : "");
    const [selectedTags, setSelectedTags] = useState(_id ? post.tags : []);
    const [imageURL, setImageURL] = useState(_id ? post.imageURL : "");
    const [visible, setVisible] = useState(_id ? post.visible : false);

    const [posting, setPosting] = useState({
        isPosting: false,
        success: false,
        error: false,
    });
    const newPostRequest = async () => {
        setPosting({ ...posting, ...{ isPosting: true } });
        const createdPost = new Post(
            title,
            "Shawn Cockburn",
            description,
            content,
            imageURL,
            selectedTags,
            visible
        );
        const result = await newPost(createdPost) ? { success: true } : { error: true };
        setPosting({ ...posting, ...result });
    }

    const editPostRequest = async () => {
        setPosting({ ...posting, ...{ isPosting: true } });
        const createdPost = new Post(
            title,
            "Shawn Cockburn",
            description,
            content,
            imageURL,
            selectedTags,
            visible
        );

        let editedData = {
            _id: _id,
        }

        // eslint-disable-next-line
        Object.keys(createdPost).map(key => {
            if (post[key] !== createdPost[key]) editedData[key] = createdPost[key];
        });

        console.log(editedData)
        const result = await editPost(editedData) ? { success: true } : { error: true };
        setPosting({ ...posting, ...result });
    }


    const metaDataTab = (
        <Box width="xlarge" fill align="center" justify="center">
            <Form
                onSubmit={(e) => e.preventDefault()}
            >
                <FormField
                    label="Title"
                    name="title"
                    required
                >
                    <TextInput
                        placeholder="Title..."
                        name="title"
                        value={title}
                        onChange={({ target: { value } }) => setTitle(value)}
                    />
                </FormField>
                <FormField
                    label="Description"
                    name="description"
                    required
                >
                    <TextInput
                        placeholder="Description..."
                        name="description"
                        value={description}
                        onChange={({ target: { value } }) => setDescription(value)}
                    />
                </FormField>
                <FormField
                    label="Image URL"
                    name="imageURL"
                    required
                >
                    <MaskedInput
                        mask={[{ fixed: 'https://' }, { regexp: /^.*$/ }]}
                        name="imageURL"
                        value={imageURL}
                        required
                        onChange={({ target: { value } }) => setImageURL(value)}
                    />
                </FormField>
                <FormField
                    label="Tags"
                    name="tags"
                >
                    <TagTextField
                        placeholder="Add Tags..."
                        name="tags"
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                        initialSuggestions={[]}
                    />
                </FormField>
            </Form>
        </Box>
    );

    const contentTab = (
        <Box flex fill direction="row" width="100%">
            <Box width="50%" border={border}>
                <Text size="small" alignSelf="center">Markdown</Text>
                <TextArea fill value={content} onChange={({ target }) => setContent(target.value)} resize={false} plain />
            </Box>

            <Box width="50%" overflow="scroll" border={border}>
                <Text size="small" alignSelf="center">Preview</Text>
                <CustomMarkdown width="50%" children={content} />
            </Box>
        </Box>
    )


    const optionsTab = (
        <Box width="large" fill justify="center" align="center">
            <Box direction="column">
                <Box margin={{ vertical: "small" }}>
                    <Button type="submit" label={_id ? "Save" : "Post"} primary disabled={
                        (content.length > 0
                            && selectedTags.length > 0
                            && title.length > 0)
                            ? false : true
                    }
                        onClick={_id ? editPostRequest : newPostRequest}
                    />
                </Box>
                <Box margin={{ vertical: "small" }}>
                    <CheckBox
                        label="Post Visible"
                        reverse
                        toggle
                        checked={visible}
                        onChange={() => setVisible(!visible)}
                    />
                </Box>
            </Box>
        </Box>
    )

    const [index, setIndex] = useState(0);
    const onActive = nextIndex => setIndex(nextIndex);

    return (
        <FadeInBox flex fill>
            {posting.isPosting ? (
                <Loading />
            ) :
                posting.success ? (
                    <Redirect to="/admin" />
                ) :
                    (<Tabs activeIndex={index} onActive={onActive} flex>
                        <Tab title="MetaData">
                            {metaDataTab}
                        </Tab>
                        <Tab title="Content">
                            {contentTab}
                        </Tab>
                        <Tab title="Options">
                            {optionsTab}
                        </Tab>
                    </Tabs>)
            }
        </FadeInBox>
    )
}

export default EditPost;

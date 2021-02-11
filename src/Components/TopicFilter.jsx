import React from 'react';
import { Box, Text } from 'grommet';

const CustomisedText = ({
    isSelected,
    ...rest
}) => (
    <Text
        style={{
            textDecoration: isSelected ? "underline" : "none",
            cursor: "pointer"
        }}
        {...rest}>
        {rest.children}
    </Text>
)

const TopicFilter = ({
    topics = [],
    selectedTopic,
    onTopicSelect,
    ...rest
}) => {

    return (
        <Box flex direction="row" justify="center" {...rest} pad="small">
            <CustomisedText isSelected={selectedTopic === undefined}
                onClick={() => onTopicSelect(undefined)}
            >{"All".toUpperCase()}</CustomisedText>
            {topics.map((topic) => (
                <>
                    <Text margin={{ horizontal: "xsmall" }}>|</Text>
                    <CustomisedText isSelected={selectedTopic === topic}
                        onClick={() => onTopicSelect(topic)}
                    >{topic.toUpperCase()}</CustomisedText>
                </>
            ))}
        </Box>
    )
}

export default TopicFilter

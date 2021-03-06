import React from 'react';

import { FormClose } from 'grommet-icons';
import { Box, Button, Keyboard, Text, TextInput } from 'grommet';

const Tag = ({ children, onRemove, ...rest }) => {
  const tag = (
    <Box
      direction="row"
      align="center"
      background="brand"
      pad={{ horizontal: 'xsmall', vertical: 'xxsmall' }}
      margin={{ vertical: 'xxsmall' }}
      round="medium"
      {...rest}
    >
      <Text size="xsmall" margin={{ right: 'xxsmall' }}>
        {children}
      </Text>
      {onRemove && <FormClose size="small" color="white" />}
    </Box>
  );

  if (onRemove) {
    return <Button onClick={onRemove}>{tag}</Button>;
  }
  return tag;
};

const TagInput = ({ value = [], onAdd, onChange, onRemove, ...rest }) => {
  const [currentTag, setCurrentTag] = React.useState('');
  const [box, setBox] = React.useState();
  const boxRef = React.useCallback(setBox, [setBox]);

  const updateCurrentTag = event => {
    setCurrentTag(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const onAddTag = tag => {
    if (onAdd) {
      onAdd(tag);
    }
  };

  const onEnter = () => {
    if (currentTag.length) {
      onAddTag(currentTag);
      setCurrentTag('');
    }
  };

  const renderValue = () =>
    value.map((v, index) => (
      <Tag
        margin="xxsmall"
        key={`${v}${index + 0}`}
        onRemove={() => onRemove(v)}
      >
        {v}
      </Tag>
    ));

  return (
    <Keyboard onEnter={onEnter}>
      <Box
        direction="row"
        align="center"
        pad={{ horizontal: 'xsmall' }}
        ref={boxRef}
        wrap
      >
        {value.length > 0 && renderValue()}
        <Box flex style={{ minWidth: '120px' }}>
          <TextInput
            type="search"
            plain
            dropTarget={box}
            dropHeight="medium"
            {...rest}
            onChange={updateCurrentTag}
            value={currentTag}
            onSelect={event => {
              event.stopPropagation();
              onAddTag(event.suggestion);
            }}
          />
        </Box>
      </Box>
    </Keyboard>
  );
};


const TagTextField = ({initialSuggestions=[], selectedTags, setSelectedTags, ...rest}) => {
    if (selectedTags === undefined) throw new Error("selectedTags hook required");
    if (setSelectedTags === undefined) throw new Error("setSelectedTags hook required");
//   const [selectedTags, setSelectedTags] = React.useState(initialTags);
  const [suggestions, setSuggestions] = React.useState(initialSuggestions);

  const onRemoveTag = tag => {
    const removeIndex = selectedTags.indexOf(tag);
    const newTags = [...selectedTags];
    if (removeIndex >= 0) {
      newTags.splice(removeIndex, 1);
    }
    setSelectedTags(newTags);
  };

  const onAddTag = tag => setSelectedTags([...selectedTags, tag]);

  const onFilterSuggestion = value =>
    setSuggestions(
      initialSuggestions.filter(
        suggestion =>
          suggestion.toLowerCase().indexOf(value.toLowerCase()) >= 0,
      ),
    );

  return (
        <TagInput
          suggestions={suggestions}
          value={selectedTags}
          onRemove={onRemoveTag}
          onAdd={onAddTag}
          onChange={({ target: { value } }) => onFilterSuggestion(value)}
          {...rest}
        />
  );
};

export default TagTextField
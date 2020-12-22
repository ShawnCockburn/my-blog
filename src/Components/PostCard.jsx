import React, { useState, useEffect } from 'react'

import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Stack,
    Heading,
    Image,
    Paragraph,
    Text
} from 'grommet';

const cardSizeValues = {
    small: {
        cardWidth: "15rem",
        cardBody: "small",
        cardHeader: "small",
        cardHeaderTextLength: 15,
        textBox: "5rem",
        headerTextSize: "0.7rem",
        textBoxTextLength: 0
    },
    medium: {
        cardWidth: "medium",
        cardBody: "small",
        cardHeader: "small",
        cardHeaderTextLength: 23,
        textBox: "15rem",
        headerTextSize: "xsmall",
        textBoxTextLength: 165
    },
    large: {
        cardWidth: "large",
        cardBody: "small",
        cardHeader: "small",
        cardHeaderTextLength: 52,
        textBox: "15rem",
        headerTextSize: "xsmall",
        textBoxTextLength: 450
    }
}


const PostCard = props => {

    const {
        title,
        description,
        imageURL,
        date,
        author,
        link,
        cardSize = "small",
        ...rest
    } = props;

    const [cardSizeValue, setCardSizeValue] = useState(cardSizeValues.small)

    useEffect(() => {
        setCardSizeValue(cardSize === "small" ?
            cardSizeValues.small :
            cardSize === "medium" ?
                cardSizeValues.medium :
                cardSizeValues.large);
    }, [cardSizeValues, cardSize])


    return (
        <Card elevation="small" width={cardSizeValue.cardWidth} {...rest}>
            <Stack anchor="bottom" fill>
                <CardBody height={cardSizeValue.cardBody}>
                    <Image
                        fit="cover"
                        src={imageURL}
                        a11yTitle={title + " image"}
                        className="card-image"
                    />
                </CardBody>

                <CardHeader
                    // background={`linear-gradient(0deg, ${background} 0%, ${background} 10%, rgba(0,0,0,0) 100%)`} //this is the old way of grad on image
                    width={cardSizeValue.cardWidth}
                    height={cardSizeValue.cardHeader}
                    justify={cardSizeValue.textBoxTextLength !== 0 ? "end": "center"}
                    align="end"
                    pad={{ horizontal: 'small' }}
                >
                    <Text size={cardSizeValue.headerTextSize}>
                        {`${author}, ${date}`}
                    </Text>
                </CardHeader>

            </Stack>
            <Box pad={{ horizontal: 'medium' }} responsive={false} height={cardSizeValue.textBox}
            align={cardSizeValue.textBoxTextLength !== 0 ? "start": "center"}>
                <Heading level="3" margin={{ vertical: 'medium' }}>
                {`${title.substring(0, cardSizeValue.cardHeaderTextLength)}${cardSizeValue.cardHeaderTextLength < title.length ? "...": ""}`}
                </Heading>
                <Paragraph margin={{ top: 'none' }}
                    fill
                >
                    {`${description.substring(0, cardSizeValue.textBoxTextLength)} ${cardSizeValue.textBoxTextLength !== 0 ? "...": ""}`}
                </Paragraph>
            </Box>
        </Card>
    )
}

export default PostCard
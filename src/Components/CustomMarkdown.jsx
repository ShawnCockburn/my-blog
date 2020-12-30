import React from 'react'
import YoutubeEmbed from './YoutubeEmbed';
import { Markdown, Box, Image, Text, Heading } from 'grommet'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Code = props => {
    const {
        className
    } = props;
    const language = className ? className.split("-")[1] : ""
    return (
        <SyntaxHighlighter
            language={language}
            style={nightOwl}
        >
            {props.children}
        </SyntaxHighlighter>
    )
}

const Img = props => {
    return (
        <Box width="100%" height="medium" margin={{ vertical: "small" }}>
            <Image
                fit="contain"
                {...props}
            />
        </Box>
    )
}

const P = props => {
    return (
        <Text {...props}>{props.children}</Text>
    )
}

const HeaderText = props => (
    <Box>
        <Heading style={{ maxWidth: "100%" }} {...props}>{props.children}</Heading>
    </Box>
)



const CustomMarkdown = ({ children, options, ...rest }) => {
    return (
        <Markdown
            children={children}
            options={{
                ...{
                    overrides: {
                        YoutubeEmbed: {
                            component: YoutubeEmbed,
                        },
                        code: {
                            component: Code,
                        },
                        img: {
                            component: Img,
                        },
                        p: {
                            component: P
                        },
                        h1: {
                            component: HeaderText,
                            props: {
                                level: '1',
                            },
                        },
                        h2: {
                            component: HeaderText,
                            props: {
                                level: '2',
                            },
                        },
                        h3: {
                            component: HeaderText,
                            props: {
                                level: '3',
                            },
                        },
                        h4: {
                            component: HeaderText,
                            props: {
                                level: '4',
                            },
                        },
                        h5: {
                            component: HeaderText,
                            props: {
                                level: '5',
                            },
                        },
                        h6: {
                            component: HeaderText,
                            props: {
                                level: '6',
                            },
                        },
                    },
                }, ...options
            }}
            {...rest}
        />
    )
}

export default CustomMarkdown

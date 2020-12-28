import React from 'react'
import YoutubeEmbed from './YoutubeEmbed';
import { Markdown } from 'grommet'
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
                    },
                }, ...options
            }}
            {...rest}
        />
    )
}

export default CustomMarkdown

import React from 'react'
import YoutubeEmbed from '../../Components/YoutubeEmbed';
import { Box, Markdown} from 'grommet'

const BlogMarkdown = ({ children, options, ...rest }) => {
    return (
        <section>
            <Box {...rest}>
                <Markdown
                    children={children}
                    options={{
                        ...{
                            overrides: {
                                YoutubeEmbed: {
                                    component: YoutubeEmbed,
                                },
                            },
                        }, ...options
                    }}
                />
            </Box>
        </section>
    )
}

export default BlogMarkdown

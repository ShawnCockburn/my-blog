import React from 'react'
import { Box } from 'grommet'
import CustomMarkdown from '../../Components/CustomMarkdown';

const BlogMarkdown = ({ children, options, ...rest }) => {
    return (
        <section>
            <Box {...rest}>
                <CustomMarkdown
                    children={children}
                />
            </Box>
        </section>
    )
}

export default BlogMarkdown

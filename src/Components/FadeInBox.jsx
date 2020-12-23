import { Box } from 'grommet'
import React from 'react'

const FadeInBox = props => {
    return (
        <Box animation={{ type: "fadeIn", duration: 1000, delay: 200 }} {...props}>
            {props.children}
        </Box>
    )
}

export default FadeInBox

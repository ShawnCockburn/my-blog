import { Heading } from 'grommet'
import React from 'react'
import FadeInBox from '../Components/FadeInBox'

const NoMatch = () => {
    return (
        <FadeInBox flex fill justify="center" align="center">
            <Heading>
                404
            </Heading>
        </FadeInBox>
    )
}

export default NoMatch

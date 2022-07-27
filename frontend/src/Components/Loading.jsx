import React from 'react'
import { PointSpreadLoading } from 'react-loadingg';
import { ThemeContext } from 'styled-components';

const Loading = () => {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <PointSpreadLoading color={theme.global.colors.text[theme.dark?"dark":"light"]}/>
            )}
        </ThemeContext.Consumer>
    )
}

export default Loading

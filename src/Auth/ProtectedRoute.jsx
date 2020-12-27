import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {
    FirebaseAuthConsumer
} from "@react-firebase/auth";
import Loading from '../Components/Loading';
import { Box } from 'grommet';

const ProtectedRoute = props => {
    return (
        <FirebaseAuthConsumer>
            {({ isSignedIn, providerId }) => {
                return providerId === null ?
                    (
                        <Box flex fill justify="center" align="center">
                            <Loading />
                        </Box>
                    ) :
                    (isSignedIn ?
                        <Route {...props} /> :
                        <Redirect to="/login" />
                    )
            }}
        </FirebaseAuthConsumer>
    )
}

export default ProtectedRoute

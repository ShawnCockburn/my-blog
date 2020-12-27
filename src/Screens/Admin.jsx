import { Heading } from 'grommet'
import React from 'react'
import FadeInBox from '../Components/FadeInBox'

import firebase from "firebase/app";

const Admin = () => {
    // firebase.auth().signOut()
    return (
        <FadeInBox flex fill justify="center" align="center">
            <Heading>
                Admin
            </Heading>
        </FadeInBox>
    )
}

export default Admin

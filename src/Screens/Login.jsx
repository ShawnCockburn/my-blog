import React from 'react'
import {
    Box,
    Button,
    Form,
    FormField,
    TextInput,
} from 'grommet';
import FadeInBox from '../Components/FadeInBox'
import {
    FirebaseAuthConsumer
} from "@react-firebase/auth";
import { Redirect } from 'react-router-dom';

const LoginAndRedirect = ({ firebase }) => {
    const signIn = async ({ email, password }) => {
        let user
        try {
            user = await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error)
        }

        console.log(user)
    }

    return (
        <FadeInBox flex fill justify="center" align="center">
            <Box width="medium">
                <Form
                onSubmit={({ value }) => signIn(value)}
                >
                    <FormField label="Email" name="email" required>
                        <TextInput
                            name="email"
                        />
                    </FormField>
                    <FormField
                        label="Password"
                        name="password"
                        htmlFor="password"
                    >
                        <TextInput name="password" id="password" type="password" />
                    </FormField>
                    <Box direction="row" justify="center" margin={{ top: 'medium' }}>
                        <Button type="submit" label="Login" primary />
                    </Box>
                </Form>
            </Box>
        </FadeInBox>
    )

}

const Login = () => {

    return (
        <FirebaseAuthConsumer>
            {({ isSignedIn, firebase }) => (isSignedIn? <Redirect to="/"/>: <LoginAndRedirect firebase={firebase}/>)}
        </FirebaseAuthConsumer>
    )
}

export default Login

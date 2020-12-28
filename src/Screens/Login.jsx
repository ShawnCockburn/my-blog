import React, { useState } from 'react'
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

    const [formErrors, setFormErrors] = useState({
        email: "",
        pass: ""
    })


    const signIn = async ({ email, password }) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch ({code, ...rest}) {
            if (code === "auth/invalid-email") setFormErrors({pass:"",email: "invalid email"})
            if (code === "auth/user-not-found") setFormErrors({pass:"",email: "user not found"})
            if (code === "auth/wrong-password") setFormErrors({pass:"wrong password",email: ""})
        }
    }

    return (
        <FadeInBox flex fill justify="center" align="center">
            <Box width="medium">
                <Form
                    onSubmit={({ value }) => signIn(value)}
                >
                    <FormField
                        label="Email"
                        name="email"
                        required
                        error={formErrors.email}
                    >
                        <TextInput
                            name="email"
                        />
                    </FormField>
                    <FormField
                        label="Password"
                        name="password"
                        htmlFor="password"
                        error={formErrors.pass}
                        required
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
            {({ isSignedIn, firebase }) => (isSignedIn ? <Redirect to="/" /> : <LoginAndRedirect firebase={firebase} />)}
        </FirebaseAuthConsumer>
    )
}

export default Login

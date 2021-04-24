/*
  This component is responsible for displaying the signin page
*/


import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Alert} from '@material-ui/lab';
import "./SignIn.styles.css";


export default function SignIn(props){

    
    const [textField, setTextField] = useState({
        usernameText:"",
        passwordText:""
    })

    const [error, updateError] = useState(false)

    // Function to update the values of input fields to states
    const updateValues = (event)=>{

        const {name,value} = event.target;

        setTextField({
            ...textField,
            [name] : value
        })
        
    }

    const  submitForm = async (event)=>{
        event.preventDefault();
        const result = await props.updateAuth(event)
        updateError(result)
    }
    return (
            <div class="signin-component">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className="signin-form">
                        <LockOutlinedIcon color="primary" style={{fontSize:"3em"}}/>
                        <Typography component="h1" variant="h5">
                        <div className="header-text">Sign in</div>
                        </Typography>
                        <form action="#" onSubmit={(e)=>{submitForm(e)}}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="usernameText"
                            label="Username"
                            name="usernameText"
                            autoFocus
                            onChange={(e)=>updateValues(e)}
                            value={textField.usernameText}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="passwordText"
                            label="Password"
                            type="password"
                            id="passwordText"
                            autoComplete="current-password"
                            onChange={(e)=>updateValues(e)}
                            value={textField.passwordText}
                        />
                        
                        <div className="signin-btn">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            Sign In
                        </Button>
                        </div>
                        </form>
                    </div>
                    
                    { (error)?
                        
                        <div class="error-display">
                            <Alert variant="outlined" severity="error">
                                Wrong Sign in Credentials
                            </Alert>
                        </div>
                        :null
                        
                    }
                    </Container>
                </div>
    )

}

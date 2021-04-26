/*
  This component is responsible for displaying the signin page
*/

/*
            Todo : decide where to to store the asociate data.
*/

import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import "./SignIn.styles.css";
import Auth from "../../AuthService/Auth";
import Alert from '@material-ui/lab/Alert';

export default function SignIn(props){

    
    /*
        TextField holds simple value of inputs
    */
    const [textField, setTextField] = useState({
        usernameText:"",
        passwordText:""
    })

    /*
        error keeps strack of server error reported while fetching for authentication.
        Currently all erros are reported as "Invalid User credentials"

        Update error is passed to the AuthService to update those error
    */
    const [error, updateError] = useState(false)

    // To display a linear progress bar until data from server is fetched
    const [isLoading, updateLoading] = useState(false);


    // Function to update the values of input fields to states
    const updateValues = (event)=>{

        const {name,value} = event.target;

        setTextField({
            ...textField,
            [name] : value
        })
        
    }

    /*
        Handles OnSubmit, [the history.push is removed because it was resetting states]
        Conditional rendering to signin is handled by app.js
    */
    const updateAuth = async(event)=>{
            
            event.preventDefault();
            updateLoading(true);
            await Auth.signIn(textField.usernameText,textField.passwordText, props.updateSigned, updateError);
            updateLoading(false);
        }

    return (
            <div className="signin-component">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className="signin-form">

                        {  isLoading?
                            <LockOpenIcon color="secondary" style={{fontSize:"3em"}}/>
                            :<LockOutlinedIcon color="primary" style={{fontSize:"3em"}}/>
                        }
                        <Typography component="h1" variant="h5">
                        <div className="header-text">Sign in</div>
                        </Typography>
                        <form action="#" method="post" onSubmit={(e)=>{updateAuth(e)}}>
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
                            disabled={isLoading?true:false}
                        >
                            Sign In
                        
                        </Button>
                        </div>
                        </form>
                    </div>
                    
                    {
                        error?
                        <div className="error-display">
                            <Alert variant="outlined" severity="error">
                                Invalid User Credentials
                            </Alert>
                        </div>
                       : null
                    }
                    
                    </Container>
                    
                </div>
    )

}

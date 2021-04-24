/*
  This component is responsible for displaying the signin page
*/

/*
    Todo : refactor promises
            Handle wrong username 400 server errors
            

*/

import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import "./SignIn.styles.css";


export default function SignIn(props){

    
    const [textField, setTextField] = useState({
        usernameText:"",
        passwordText:""
    })
    // Function to update the values of input fields to states
    const updateValues = (event)=>{

        const {name,value} = event.target;

        setTextField({
            ...textField,
            [name] : value
        })
        
    }

    return (
            <div className="signin-component">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className="signin-form">
                        <LockOutlinedIcon color="primary" style={{fontSize:"3em"}}/>
                        <Typography component="h1" variant="h5">
                        <div className="header-text">Sign in</div>
                        </Typography>
                        <form action="#" method="post" onSubmit={(e)=>{props.updateAuth(e)}}>
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
                    
                    </Container>
                </div>
    )

}

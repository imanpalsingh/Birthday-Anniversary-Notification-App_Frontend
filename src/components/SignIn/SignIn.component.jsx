/*
  This component is responsible for displaying the signin page
*/

/*
  Todo : route signin to dashboard once it is completed
*/

import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import "./SignIn.styles.css";

class SignIn extends Component{

    constructor(props){
        super(props)

        // props for the dynamically changing input fields ( not the global)
        this.state={
            usernameText : "",
            passwordText : ""
        }
        
    }

    // Function to update the values of input fields to states
    updateValues = (event)=>{

        this.setState({
          [event.target.name] : event.target.value
        })
        
    }

  
    render(){
        
        return (
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <div className="signin-form">
                      <LockOutlinedIcon color="primary" style={{fontSize:"3em"}}/>
                      <Typography component="h1" variant="h5">
                        <div className="header-text">Sign in</div>
                      </Typography>
                      <form action="#" onSubmit={(e)=>{this.props.updateAuth(e)}}>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="usernameText"
                          label="Email Address"
                          name="usernameText"
                          autoComplete="email"
                          autoFocus
                          onChange={(e)=>this.updateValues(e)}
                          value={this.state.usernameText}
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
                          onChange={(e)=>this.updateValues(e)}
                          value={this.state.passwordText}
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
            )
      }
}
export default SignIn;
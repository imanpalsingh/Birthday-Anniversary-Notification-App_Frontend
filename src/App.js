import Auth from "./AuthService/Auth";
import Home from "./components/Home/Home.component";
import PrivateRoute from "./AuthService/PrivateRoute/PrivateRoute.Route";
import React, {Component} from "react";
import SignIn from "./components/SignIn/SignIn.component";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

class App extends Component {

  constructor(props){
    super(props);

    //State for global user authentication
    this.state={
      username:"",
      password:"",
      token:"" //jwt
    }

  }

  /*
  Function makes an api call to receive token using username and password
  */
  updateToken = async (event)=>{
    const token = await Auth.signIn(this.state.username,this.state.password)
    this.setState({token:token})
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    this.setState({
      token:token
    })
  }

  /*
     This binded function for child components; for updating states
  */
  updateAuth = (event)=>{
    
    event.preventDefault();
    this.setState({
      username: event.target.usernameText.value,
      password: event.target.passwordText.value
    },()=>{
      this.updateToken()
    })
    
    
  }

  render(){
   
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <PrivateRoute Component={Home} signOut={Auth.signOut} Display={this.state.token?true:false}/>
            </Route>
            <Route exact path="/signin"> 
              <PrivateRoute Component={SignIn} Display={this.state.token?false:true} FallbackLink="/" updateAuth={this.updateAuth}/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;

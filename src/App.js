import React, {Component} from "react";
import SignIn from "./components/SignIn/SignIn.component";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Axios from "axios";

class App extends Component {

  constructor(props){
    super(props);

    //State for global user authentication
    this.state={
      username:"",
      password:""
    }
  }


  updateAuth = async (event)=>{
    event.preventDefault();

    this.setState({
      username: event.target.usernameText.value,
      password: event.target.passwordText.value
    })

    const requestOptions = {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username:this.state.username,
        password:this.state.password
      })
    }

    const response = await fetch('http://localhost:25953/api/Login/token', requestOptions);
    const data = await response.json();
    console.log(data);
  }

  render(){
  
    return (
      <div className="App">
      <Router>
        <Route path="/"> {/* Currently routing all paths to signin */}
          <SignIn updateAuth={this.updateAuth} />
        </Route>
       </Router>
      </div>
    )
  }
}

export default App;

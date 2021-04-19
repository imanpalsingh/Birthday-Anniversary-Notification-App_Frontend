import React, {Component} from "react";
import SignIn from "./components/SignIn/SignIn.component";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class App extends Component {

  constructor(props){
    super(props);

    //State for global user authentication
    this.state={
      username:"",
      password:""
    }
  }


  updateAuth = (event)=>{
    event.preventDefault();

    this.setState({
      username: event.target.usernameText.value,
      password: event.target.passwordText.value
    })
    
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

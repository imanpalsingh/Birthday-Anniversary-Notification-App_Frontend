class Auth{

    /*
        The backend api is configured to return jwt at /api/Login/token with parameters as suername and password
    */
    signIn = async (username, password) => {
        
        const requestOptions = {
            method : 'POST',
            headers: { 
              'Content-Type': 'application/json',
             },
            body: JSON.stringify({
              username:username,
              password:password
            })
          }

        
        const response = await fetch('/api/Login/token', requestOptions);
        const message = await response.json();

        const tokenContent = (message.token)?message.token:"";
        localStorage.setItem("token", tokenContent)

        return message.token
    }

    
    signOut = ()=>{
      localStorage.removeItem("token");
      /*
        Redirection is handled by calling component
    */
    }
}

export default new Auth();
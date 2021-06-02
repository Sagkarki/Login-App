import React, {useState} from 'react'

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"", email:""});
    return (
        <form>
          <div className="form-inner">
              <h2>Login</h2>
              {/*ERROR!!*/}
              <div className="form-group">
                  <label htmlFor="name">Name: </label>
                  <input type="text" naame="name" id = "name"/>
              </div>
              <div className="form-group">
                  <label htmlFor="email"> Email: </label>
                  <input type="email" name ="email" id="email"/>
              </div>
              <div className = "form-group">
                  <label htmlFor="password"> Password: </label>
                  <input type="password" name="password" id="password"/>
              </div>
              <input type="submit" value="LOGIN"/>
          </div>

        </form>
    )
}

export default LoginForm

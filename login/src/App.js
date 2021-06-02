import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser ={
    email: "student@bridgeport.com",
    password: "student123"
  }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);

  if (details.email == adminUser.email && details.password ==adminUser.password)
  console.log("Logged in");
  setUser({
    name:details.name,
    email: details.email
  });
}

   const Logout = () => {
     setUser({name: "", email:""});
   }
  return (
    <div className="App">
      {(user.email != "")? (
        <div className="Welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <button onClick={Logout}>Log out</button>
        </div>
      ):(
        <LoginForm Login={Login} error = {error}/>
      )}
   </div>
  );
   }

export default App;

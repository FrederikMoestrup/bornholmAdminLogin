import { useState } from 'react';
function Login({ users, blankUser }) {

    const [formUser, setFormUser] = useState(blankUser);

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.id;
       
        setFormUser({ ...formUser, [name]: value });
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("submit", formUser)
        
        if (users.some(user => user.login == formUser.login && user.password == formUser.password)) {
            alert("Logging in!");
            
        } else {
            alert("Login and password don't match!");
        }
    }

  return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login">Login</label>
            <input id="login" type="text" placeholder="Enter username" value={formUser.login} onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <input id="password" type="text" placeholder="Enter password" value={formUser.password} onChange={handleChange}/>
            <button type="submit">Login</button>
        </form>
  );
}
export default Login
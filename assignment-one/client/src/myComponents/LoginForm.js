import React from 'react';
import '../App.css';
export default function LoginForm() {
    return (
        <div className="form">
            <label htmlFor="InputEmail1" className="form-label">Email Id:</label>
            <input className="form-control" type="text" placeholder="Enter Email Id" id="InputEmail1" /><br />
            <label htmlFor="InputPassword1" className="form-label">Password:</label>
            <input className="form-control" type="password" id="InputPassword1"/><br />
            <button type="submit" className="btn btn-outline-success">Login</button>
        </div>
    )
}

{/* <p>Email</p>
            <input type="email" name="email" /><br />
            <p>Password</p>
            <input type="password" name="password" /><br />
            <button onClick={()=>{
                console.log("Logined");
            }}>Login</button> */}
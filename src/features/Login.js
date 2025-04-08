import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
    const [user, setUser] = useState({email: "", password: "" });
  return (
    <>
    <div className="App-Register-Row">
      <div>
        <h3>Login Form</h3>
        <p>
          <input
            type="text"
            placeholder="Email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
        </p>
        <p>
          <button>Log In</button>
        </p>
        <p>
          <Link to="/users">Create Account</Link>
        </p>
      </div>
    </div>
    </>
  );
}
export { Login };
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "./userSlice";
import "./User.css";

const User = () => {
  const [user, setUser] = useState({name: "", email: "", password: ""});
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  

  const handleAddUser = () => {
    if (user.name && user.email && user.password) {
      dispatch(addUser(user));
      setUser({name: "", email: "", password: ""});
    }
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="App-Register-Row">
        <div className="App-Register-Box">
            <h2>User Signup Form</h2>
        <p><input type="text" placeholder="Enter name" value={user.name} onChange={(e)=>setUser({...user,name: e.target.value})} /></p>
        <p><input type="text" value={user.email} placeholder="Enter email" onChange={(e)=>setUser({...user,email: e.target.value})} /></p>
        <p><input type="password" value={user.password} placeholder="Enter password" onChange={(e)=>setUser({...user,password: e.target.value})} /></p>
        <p><button onClick={handleAddUser}> Register </button></p>
        </div>
        <div className="App-Register-Box">
            <h2>User Lists</h2>
        <ul>
            {users.length===0 ? (<p>No users</p>):(users.map((value) => (
            <li key={value.id}>
                {value.name}{" "}{value.email}{" "}{value.password}{" "}
                <button onClick={() => handleDeleteUser(value.id)}> Delete </button>{" "}
            </li>
            ))
            )}
        </ul>
        </div>
    </div>
  );
}

export default User;
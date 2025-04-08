import './Header.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
//   const [user, setUser] = useState({name:"",email:"",password:""});
  return (
    <div className="App_Header_Row">
      <h1>My React Store</h1>
      <div >
        <ul className="App_Header_Right">
           <li className='headerBox'><Link className='headerColor' to="Home">Home</Link></li>
           <li className='headerBox'><Link className='headerColor' to="login">Login</Link></li>
        </ul>
      </div>
    </div>
  );
}
export {Header}

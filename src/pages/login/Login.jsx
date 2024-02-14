import React, { useState } from "react";
import './login.scss'
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {

  const [data, setData] = useState('');

  const navigate = useNavigate();

  const handleClick = () => {
    setUser(data);
    navigate('/product');
  };


  return <div>
        <div className="login">
            <h1 className="login__title">Login Page</h1>

            <input
        type="text"
        name="username"
        id="username"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="login__input"
        placeholder="UserName"
      />
      <button onClick={handleClick} className="login__btn">Login</button>

        </div>


    </div>;
};

export default Login;

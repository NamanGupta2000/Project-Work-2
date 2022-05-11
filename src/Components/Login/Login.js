import React, {useState} from "react";
import './Login.css';
import { ReactDOM } from "react";
import logo from './logo.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png


const Login = () =>{  
  const [values, setValues] = useState({
    mobileemail: "",
    loginwithotp: "",
    password: "",
  });


  const [errors, setErrors] = useState({});

  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  
   return (
     <div className="container">
     <div className="Images-gridItem">
       <img src={logo} alt="Logo" />;
       <h1>SHOPDECK</h1>
     </div>
        <div className="app-wrapper">
          <div>
            <h2 classname="title">Login</h2>
          </div>
          <form classname="form-wrapper">
            <div classname="name">
              <input classname="input" type="text" name="mobileemail" placeholder="Mobile/Email" value={values.mobileemail} onChange={handleChange} />
            </div>
            <div classname="Password">
              <input classname="input" type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
            </div>
            <div className="Button">
              <button classname="submit" onclick={handleFormSubmit}>Log in</button>
            </div>
            <div><h9>Forgot your password</h9></div>
            <div><h9>Signup</h9></div>
            <div className="label">
              <label>Or</label>
            </div>
            <div classname="Otp">
              <input classname="input" type="text" name="loginwithotp" placeholder="Login with OTP" value={values.loginwithotp} onChange={handleChange} />
            </div>
            <div className="label">
              <label>Or</label>
            </div>
            <div className="Button">
              <button classname="submit" onclick={handleFormSubmit}>GOOGLE</button>
            </div>
            <div className="Button">
              <button classname="submit" onclick={handleFormSubmit}>FACEBOOK</button>
            </div>
          </form>
        </div>
     </div>
     
   );
};
  

export default Login;

import React, {useState} from "react";
import './Signup.css';
import { ReactDOM } from "react";
import logo from './logo.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png


const Signup = () =>{  
  const [values, setValues] = useState({
    enteryourname: "",
    enteryouremail: "",
    enteryourmobileno: "",
    createpassword: "",
    confirmpassword: "",

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
            <h2 classname="title">Register Yourself</h2>
          </div>
          <form classname="form-wrapper">
            <div classname="name">
              <input classname="input" type="text" name="enteryourname" placeholder="Name" value={values.enteryourname} onChange={handleChange} />
            </div>
            <div classname="Email">
              <input classname="input" type="text" name="enteryouremail" placeholder="Email" value={values.enteryouremail} onChange={handleChange} />
            </div>
            <div classname="Mobile">
              <input classname="input" type="int" name="enteryourmobileno" placeholder="Mobile" value={values.enteryourmobileno} onChange={handleChange} />
            </div>
            <div classname="Password">
              <input classname="input" type="password" name="createpassword" placeholder="Create password" value={values.createpassword} onChange={handleChange} />
            </div>
            <div classname="Confirm password">
              <input classname="input" type="password" name="confirmpassword" placeholder="Confirm password" value={values.confirmpassword} onChange={handleChange} />
            </div>
            <div className="Button">
              <button classname="submit" onclick={handleFormSubmit}>SIGN UP</button>
            </div>
          </form>
        </div>
     </div>
     
   );
};
  

export default Signup;
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const SignUp = (props) => {
    const [credentials, setCredentials]= useState({ name:"", email:"", password:"", cpassword:""});
    let navigate= useNavigate();

    const HandleSubmit= async (e)=>{
          e.preventDefault();
          const { name, email, password} = credentials; //destructuring 
          //API call
          const url = `http://localhost:8080/api/auth/createuser`;
          if(credentials.cpassword !== credentials.password){
              props.showAlert("Passwords not Matched, Retry!!","warning");
          }
          else{
              const response = await fetch(url, {
                  method: 'POST',
                  headers: {
                  'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ name, email, password})
              });
              const json= await response.json();  // parses JSON response into native JavaScript objects
            //   console.log(json);   

              if(json.success){  //using our backend variable success to check whether request succeed or not
                  //saving the authToken and redirecting(using useNavigate(earlier we use useHistory), hook in react-router-dom)
               //  console.log("before")
                 //console.log(json.authtoken)
                  localStorage.setItem("token", json.authtoken); //storing token in localstorage (note: in backend also token sending by json should be in name authtoken)
            
          //  console.log("after")      //  console.log(json.authtoken)
                  props.showAlert("Account Created Successfully","success");
                  navigate("/");  //recirecting using useNavigate
              }
              else{
                  props.showAlert(json.error,"danger");
              }
          }
    }
    const onChange=(e)=>{
      //using spread operator(...), all properties of note object stays, but if extra props specified then add them or overwrite them
      setCredentials({...credentials, [e.target.name]:e.target.value})  //will update the credentials
    }

    return (
      <div className='container mt-4'>
        <h1 className='mb-4'><b>SignUp</b></h1>
        <form onSubmit={HandleSubmit}> {/*biggest advantage of using onsubmit is we can add required and other authetication feilds directly */}
         
          <div className="mb-3">
              <label htmlFor="name" className="form-label"><b>Name</b></label>
              <input type="text" className="form-control" id="name" name='name'placeholder='Enter Your Name of Min. 4 Characters' onChange={onChange}/>
          </div>
          <div className="mb-3">
              <label htmlFor="email" className="form-label"><b>Email Address</b></label>
              <input type="email" className="form-control" id="email" placeholder='Enter Your Email' name='email' aria-describedby="emailHelp" onChange={onChange} required/>
          </div>
          <div className="mb-3">
              <label htmlFor="password" className="form-label"><b>Password</b></label>
              <input type="password" className="form-control" id="password" name='password' placeholder='Enter The Password of minimum 5 Characters'onChange={onChange} required minLength={5}/>
              <div id="passwordHelpBlock" className="form-text">
              Password's should be of atleast 5 character length
              </div>
          </div>
          <div className="mb-3">
              <label htmlFor="cpassword" className="form-label"><b>Confirm Password</b></label>
              <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} required/>
              <div id="passwordHelpBlock" className="form-text">
              Should match with Password
              </div>
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
}

export default SignUp;
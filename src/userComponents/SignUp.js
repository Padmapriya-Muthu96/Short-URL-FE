import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";


// const REACT_APP_API_URL="https://urlshortner-be.onrender.com"

const SignUp=()=>{

  const formRef = useRef(null);
 let navigate=useNavigate();
 

  

    const handleSignup=async(e)=>{
        e.preventDefault()

    let data={

        firstname:e.target.firstname.value,
        lastname:e.target.lastname.value,
        username:e.target.username.value,
        password:e.target.password.value

    }

    try{
            const res=await axios.post(`${process.env.REACT_APP_API_URL}/url/register`,data)
            console.log(res);
            if(res.status===201)
            {
                toast.success(res.data.message)
                formRef.current.reset();
                
                if (res.data.activeStatus) {
                  navigate('/url/sign-in'); 
                } else {
                  navigate('/url/account-activate'); 
                }
        } 
      }
      catch (error) {
             toast.error(error.response.data.error || error.response.data.message)
        }
    }


    return<div className='container-fluid' >
    

      <div className="titlediv">
    
    </div>
    <div className='signup-wrapper'>
    <h1 className='title'>Sign Up</h1>
    <br></br>
    <Form onSubmit={handleSignup} ref={formRef}>
      
   
    
    <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label">First Name:</Form.Label>
        <div className="col-sm-10">
        <Form.Control type="text" placeholder="Enter First Name" name="firstname"/>
        </div>
      </Form.Group>
      <br></br>
      
      
      <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label">Last Name:</Form.Label>
        <div className="col-sm-10">
        <Form.Control type="text" placeholder="Enter Last Name" name="lastname"/>
        </div>
      </Form.Group>
      <br></br>

      <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label">User Name:</Form.Label>
        <div className="col-sm-10">
        <Form.Control type="email" placeholder="abc@gmail.com" name="username"/>
        </div>
      </Form.Group>
      <br></br>
      <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label">Password:</Form.Label>
        <div className="col-sm-10">
        <Form.Control type="password" placeholder="Password" name="password" />
       
        </div>
      </Form.Group>
      <br></br>
      <div className="butdiv">
      <Button  className="sub-btn" variant="primary" type="submit" >
        Sign Up
      </Button>
      </div>
      <br></br>
      <br></br>
      <div className="linkdiv">
      <p>Alreay have Account? <Link to="/url/sign-in" className="btn btn-link">Sign In</Link></p>
      <p>You Want to Activate Account? <Link to="/url/account-activate" className="btn btn-link">Activate Account</Link></p>
      </div>
    </Form>
    </div>
  </div>
}
export default SignUp;
import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

// const REACT_APP_API_URL="http://localhost:3000"

const SignIn=()=>{

  const formRef = useRef(null);
  let navigate=useNavigate();
 
     const handleSignin=async(e)=>{
         e.preventDefault()
 
     let data={
 
         username:e.target.username.value,
         password:e.target.password.value
 
     }
 
     try{
             const res=await axios.post(`${process.env.REACT_APP_API_URL}/url/login`,data)
             console.log(res);
             
             if (res.status === 200) {
              toast.success(res.data.message);
              formRef.current.reset();
                
              navigate("/url/short-url");
            }
          } catch (error) {
            toast.error(error.response.data.error || error.response.data.message);
          }
     }

    return (
        <div className="container-fluid">
         <div className="signup-wrapper">
          <h1 className="title">Sign In</h1>
          <br></br>
            <Form onSubmit={handleSignin} ref={formRef}>
    
           
           <Form.Group className="form-group row" >
            <Form.Label className="col-sm-2 col-form-label">User Name:</Form.Label>
            <div className="col-sm-10">
            <Form.Control type="email" placeholder="Enter email" name="username"/>
            </div>
          </Form.Group>
          <br></br>
          <Form.Group className="form-group row" >
            <Form.Label className="col-sm-2 col-form-label">Password:</Form.Label>
            <div className="col-sm-10">
            <Form.Control type="password" placeholder="Password" name="password"/>
            </div>
          </Form.Group>
          <br></br>
              <Button  className="sub-btn" variant="primary" type="submit" >
                Submit
              </Button>
              <br></br>
              <br></br>
              <p>
                Don't have an account? <Link to="/url/sign-up">Sign up</Link>
              </p>
              <p>
                Forget Your password? <Link to="/url/forget-password">Forget Password</Link>
              </p>
              <p>You Want to Activate Account? <Link to="/url/account-activate" className="btn btn-link">Activate Account</Link></p>
            </Form>
          </div>
        </div>
      );
    };
    


export default SignIn;
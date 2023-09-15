import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

// const REACT_APP_API_URL="http://localhost:3000"

const ForgotPassword=()=>{

  const formRef = useRef(null);
 let navigate=useNavigate();

  const handleForget=async(e)=>{
    e.preventDefault()

  let data={
    username:e.target.username.value
  }

  try{
    const res=await axios.post(`${process.env.REACT_APP_API_URL}/url/forgot-password`,data)
    console.log(res);
    if(res.status===200)
    {
        toast.success(res.data.message)
        formRef.current.reset();
        navigate('/url/reset-password'); 
       
} 
}
catch (error) {
      toast.error(error.response.data.error || error.response.data.message)
    console.log(error);
}
}
    return<div className='container-fluid' >
    
      <div className="titlediv">
    
    </div>
    <div className='signup-wrapper'>
    <h1 className='title'>Forget Password</h1>
    <br></br>
    <Form onSubmit={handleForget} ref={formRef}>
      
   <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label">User Name:</Form.Label>
        <div className="col-sm-10">
        <Form.Control type="email" placeholder="Enter User Name" name="username"/>
        </div>
      </Form.Group>
      <br></br>
      
      
      <div className="butdiv">
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </div>
      <br></br>
      
      
    </Form>
    </div>
  </div>
    
}

export default ForgotPassword;
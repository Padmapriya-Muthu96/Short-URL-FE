import React from "react"
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useRef } from "react";
 import { useNavigate } from "react-router-dom";
 import { toast } from "react-toastify";
import axios from "axios";

// const REACT_APP_API_URL="http://localhost:3000"

const ActivatePage=()=>{

    const formRef = useRef(null);
    let navigate=useNavigate();
    
   
       const handleactive=async(e)=>{
           e.preventDefault()
   
       let data={
   
           token:e.target.token.value,
           
   
       }

       try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/url/account-activate/:token`, data);
  
        if (res.status === 200) {
          toast.success(res.data.message);
          navigate('/url/sign-in');
          formRef.current.reset();
         
        }
      } catch (error) {
        toast.error(error.response.data.message || 'Activation failed');
      }
    };

    return<div className='container-fluid' >
    

      <div className="titlediv">
    
    </div>
    <div className='signup-wrapper'>
    <h1 className='title'>Activate user Account</h1>
    <br></br>
    <Form onSubmit={handleactive} ref={formRef}>
      
   
    
    <Form.Group className="form-group row" >
        <Form.Label class="col-sm-2 col-form-label">Activate Token:</Form.Label>
        <div className="col-sm-10">
        <Form.Control type="text" placeholder="Enter Activate Token" name="token"/>
        </div>
      </Form.Group>
      <br></br>
      
      
      
      <div className="butdiv">
      <Button  className="sub-btn" variant="primary" type="submit" >
        Activate Account
      </Button>
      </div>
      <br></br>
      
    </Form>
    </div>
  </div>


}

export default ActivatePage;
import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

// const REACT_APP_API_URL = "http://localhost:3000";

const ShortUrl = () => {
  const [shortUrl, setShortUrl] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const formRef = useRef(null);

  const handleShort = async (e) => {
    e.preventDefault();

    let data = {
      longUrl: e.target.longUrl.value,
    };

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/url/shorten`, data);
      console.log(res);
      if (res.status === 200) {
        toast.success("Short URL created successfully");
        setShortUrl(res.data.shortUrl);
        formRef.current.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchClickCount = async () => {
    if (shortUrl) {
      // Extract the short code from the short URL
      const shortCode = shortUrl.split("/").pop();

      // Fetch the click count from the server using the short code
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/url/click-count/${shortCode}`);
        if (response.status === 200) {
          setClickCount(response.data.clickCount);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="titlediv"></div>
      <div className="signup-wrapper">
        <h1 className="title">URL SHORTENER</h1>
        <br></br>
        <Form onSubmit={handleShort} ref={formRef}>
          <Form.Group className="form-group row">
            <Form.Label className="col-sm-2 col-form-label">Long URL:</Form.Label>
            <div className="col-sm-10">
              <Form.Control type="text" placeholder="Enter Long URL" name="longUrl" />
            </div>
          </Form.Group>
          <br></br>
          <div className="butdiv">
            <Button variant="primary" type="submit">
              Get Short URL
            </Button>
          </div>
          <br></br>
        </Form>
        {shortUrl && (
          <div>
            <p style={{color:"#bd1caa"}}>
              Short URL:{" "}
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
            </p>
            <br></br>
            <p style={{color:"#07a32e"}}>Copy short url: {shortUrl}</p>
            <br></br>
            <Button onClick={fetchClickCount}>Fetch Total URL Clicks</Button>
            <br></br>
            <br></br>
            
            <p>The number of clicks from the shortened URL that redirected the user to the destination page.</p>
            
            <p style={{color:"#bd1caa"}}>Click Count: {clickCount}</p>

            <br></br>
            <Link to='/url/day'>
            <i class="fa-solid fa-arrow-right" style={{color:"green"}}></i> Check the total number of URLs created per day. 
    </Link>
    <br></br>
    <Link to='/url/monthly'>
    <i class="fa-solid fa-arrow-right" style={{color:"green"}}></i> Check the total number of URLs created within a month. 
    </Link>
    <Link to='/created-url-list'>
    <i class="fa-solid fa-arrow-right" style={{color:"green"}}></i> Check all the created URLs. 
    </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortUrl;
import React from "react";
import { Link } from "react-router-dom";


const Dashbaord=()=>{
    return<>
    <div className="dashboard-container">
<p>ShortURL is a free tool to shorten URLs and generate short links
URL shortener allows to create a shortened link making it easy to share</p>
<br></br>
<p>ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites. Just paste the long URL and click the Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails. After shortening the URL, check how many clicks it received.</p>
    <br></br>
    <p>Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. Track statistics for your business and projects by monitoring the number of hits from your URL with our click counter.</p>
    
    <div className="inner-dashboard">
<p><mark>You want to convert Long URL to Short URL? </mark></p>
<div className="signup-dash">
    <p className="click-dash" style={{color:"#eb34de"}}>Click Here <i class="fa-solid fa-arrow-right" style={{color:"green"}}></i></p>
    <Link to='/url/sign-up'>
    Sign Up
    </Link>
    </div>
    <Link to='/url/short-url'>
    <i class="fa-solid fa-arrow-right" style={{color:"green"}}></i> Convert the Long URL into Short URL. 
    </Link>
    <br></br>
    <Link to='/url/day'>
    <i class="fa-solid fa-arrow-right" style={{color:"green"}}></i> Check the total number of URLs created per day. 
    </Link>
    <br></br>
    <Link to='/url/monthly'>
    <i class="fa-solid fa-arrow-right" style={{color:"green"}}></i> Check the total number of URLs created within a month. 
    </Link>
    <br></br>
    <Link to='/created-url-list'>
    <i class="fa-solid fa-arrow-right" style={{color:"green"}}></i> Check the All created URLs. 
    </Link>
    <br></br>
    <br></br>
    </div>
    </div>
    </>
}
export default Dashbaord;
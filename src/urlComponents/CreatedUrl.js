import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const REACT_APP_API_URL = 'http://localhost:3000'; 

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    
    axios
      .get(`${process.env.REACT_APP_API_URL}/all`)
      .then((response) => {
        setUrls(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='url-container' style={{marginLeft:"20%", marginRight:"20%"}}>
      <h2 style={{color:"blueviolet"}}>All Created URLs</h2>
   
      <table style={{ tableLayout: 'fixed', width: '100%' }}>
        <thead style={{backgroundColor:"#cdc8f7"}}>
          <tr>
            <th style={{ width:'20%', border:"1px solid #ee03ff" , maxWidth: '20%', textAlign:"center"}}>Original URL</th>
            <th style={{ width:'20%' , border:"1px solid #ee03ff", textAlign:"center"}}>Short URL</th>
            <th style={{ width:'10%', border:"1px solid #ee03ff" , textAlign:"center"}}>Click Count</th>
            <th style={{ width:'10%' , border:"1px solid #ee03ff", textAlign:"center"}}>Created At</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id}>
              <td style={{ width:'20%', border:"1px solid #ee03ff", maxWidth: '20%', wordWrap: 'break-word', padding:"2px", paddingLeft:'4px', paddingRight:"4px"}}>{url.originalUrl}</td>
              <td style={{ width:'20%', border:"1px solid #ee03ff" }}>{url.shortUrl}</td>
              <td style={{ width:'10%', border:"1px solid #ee03ff", textAlign:"center" }}>{url.clickCount}</td>
              <td style={{ width:'10%', border:"1px solid #ee03ff" }}>{new Date(url.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    
  );
};

export default UrlList;
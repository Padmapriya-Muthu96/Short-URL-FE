import React, { useEffect, useState } from "react";
import axios from "axios";

// const REACT_APP_API_URL = "http://localhost:3000";

const DailyStats = () => {
  const [dailyStats, setDailyStats] = useState([]);

  useEffect(() => {
    // Fetch daily stats
    axios
      .get(`${process.env.REACT_APP_API_URL}/url/stats/day`)
      .then((response) => {
        setDailyStats(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container" style={{marginLeft:"20%", marginRight:"20%"}}>
      <h2 style={{color:"blueviolet"}}>Daily Stats</h2>
      <table >
        <thead style={{backgroundColor:"#cdc8f7"}}>
          <tr>
            <th style={{border:"1px solid #ee03ff"}}>Date</th>
            <th style={{border:"1px solid #ee03ff"}}>Short URL</th>
            <th style={{border:"1px solid #ee03ff"}}>Count</th>
          </tr>
        </thead>
        <tbody>
          {dailyStats.map((stat) => (
            <tr key={stat._id.day}>
              <td style={{border:"1px solid #ee03ff"}}>{`${stat._id.year}-${stat._id.month}-${stat._id.day}`}</td>
              <td style={{border:"1px solid #ee03ff"}}>{stat._id.shortUrl}</td>
              <td style={{border:"1px solid #ee03ff"}}>{stat.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyStats;
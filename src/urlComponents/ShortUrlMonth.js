import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const REACT_APP_API_URL = 'http://localhost:3000'; 

const MonthlyStats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Fetch monthly stats from the backend
    async function fetchMonthlyStats() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/url/stats/month`);
        if (response.status === 200) {
          setStats(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchMonthlyStats();
  }, []);

  return (
    <div className="container" style={{marginLeft:"20%", marginRight:"20%"}}>
      <h2 style={{color:"blueviolet"}}>Monthly Short URL Stats</h2>
      <table >
        <thead style={{backgroundColor:"#cdc8f7"}}>
          <tr>
            <th style={{border:"1px solid #ee03ff"}}>Month</th>
            <th style={{border:"1px solid #ee03ff"}}>Short URL</th>
            <th style={{border:"1px solid #ee03ff"}}>Count</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat, index) => (
            <tr key={index}>
              <td style={{border:"1px solid #ee03ff"}}>{`${stat._id.year}-${stat._id.month}`}</td>
              <td style={{border:"1px solid #ee03ff"}}>{stat._id.shortUrl}</td>
              <td style={{border:"1px solid #ee03ff"}}>{stat.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyStats;
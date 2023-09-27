import React from "react";
import "./HomePageStyle.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_API_KEY
    ? import.meta.env.VITE_API_KEY
    : " ";
  const redirect_url = import.meta.env.VITE_REDIRECT_URL
    ? import.meta.env.VITE_REDIRECT_URL
    : " ";
  const authUrl = `http://www.last.fm/api/auth/?api_key=${apiKey}&cb=${redirect_url}`;

  const handleClick = () => {
    // navigate(`/combinedPage`);
    window.location.href = authUrl;
  };

  return (
    <div className="homePage">
      <div className="title">
        <p className="titlePara">Music Streaming Application...</p>
        {/* <img className='titleImg' src={astro} alt='image' /> */}
      </div>

      <div className="otherTitle">
        <p className="otherTitlePara">
          because without music, life is nothing...
        </p>
        <Button
          sx={{
            marginLeft: "30%",
            marginTop: "5%",
            backgroundColor: "#D67BFF",
            width: "40%",
          }}
          variant="contained"
          onClick={handleClick}
        >
          Let's get started...
        </Button>
      </div>
    </div>
  );
};

export default HomePage;

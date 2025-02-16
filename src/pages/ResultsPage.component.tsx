import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { story, imageUrl } = location.state || {};
  console.log(story, imageUrl);
  return (
    <div
      style={{
        backgroundColor: "#F2EBB5",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>Your Generated Story</h1>
        {story && (
        <div>
          <h3>Generated Story:</h3>
          <p> {story} </p>
        </div>
      )}

      {imageUrl && (
        <div>
          <h3>Generated image:</h3>
          <img src={imageUrl} alt="Generated" />
        </div>
      )}

     

      <Button
        variant="contained"
        sx={{ marginTop: "20px", borderRadius: "10px", backgroundColor: "#f7c120" }}
        onClick={() => navigate("/")}
      >
        Generate Another Story
      </Button>
    </div>
  );
}

export default ResultsPage;

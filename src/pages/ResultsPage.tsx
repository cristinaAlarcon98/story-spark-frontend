import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { storyPages, imageUrl } = location.state || {};
  const [currentPage, setCurrentPage] = useState(0);
  const numPages = storyPages?.length || 0;
  const firstPage = storyPages?.[0] || "";
  const titleMatch =
    firstPage.match(/\*\*Title:(.*?)\*\*/) ||
    firstPage.match(/\*\*(.*?)\*\*/) ||
    firstPage.match(/###\s*(.*?):/);
  const title = titleMatch ? titleMatch[1].trim() : "Untitled Story";
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, numPages - 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        minWidth: "400px",
        backgroundColor: "#F2EBB5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        flexDirection: "column",
      }}
    >
      <h1>{title}</h1>
      {numPages > 0 && (
        <Box
          sx={{
            display: "flex",
            width: "80%",
            height: "60vh",
            backgroundColor: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <Box
            sx={{
              width: "50%",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "black", overflow: "scroll" }}
            >
              {storyPages[currentPage]
                .replace(/\*\*Title:.*?\*\*/, "")
                .replace(/\*\*(.*?)\*\*/, "")
                .replace(/###\s*.*?:/, "")
                .trim()}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "50%", // Adjust width as needed
              height: "100%", // Ensures it's a vertical rectangle
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#EEE",
              overflow: "hidden", // Prevents overflow of the image
              padding:0
            }}
          >
            <img
              src={imageUrl}
              alt={"Story Illustration"}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      )}

      <Box sx={{ marginTop: "20px", display: "flex", gap: "20px" }}>
        <Button
          variant="contained"
          sx={{ borderRadius: "10px", backgroundColor: "#f7c120" }}
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          Previous Page
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: "10px", backgroundColor: "#f7c120" }}
          onClick={nextPage}
          disabled={currentPage === numPages - 1}
        >
          Next Page
        </Button>
      </Box>

      <Button
        variant="contained"
        sx={{
          marginTop: "20px",
          borderRadius: "10px",
          backgroundColor: "#f7c120",
        }}
        onClick={() => navigate("/")}
      >
        Generate Another Story
      </Button>
    </div>
  );
}

export default ResultsPage;

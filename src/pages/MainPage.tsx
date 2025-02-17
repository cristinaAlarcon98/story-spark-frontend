import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress, InputAdornment, Modal } from "@mui/material";
import { useGenerateStoryAndImage } from "../hooks/useGenerateStoryAndImage";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [userPrompt, setUserPrompt] = useState("");
  const [storyType, setStoryType] = useState("");
  const { loading, error, generateStoryAndImage } = useGenerateStoryAndImage(userPrompt,storyType);
  const navigate = useNavigate();
  
  const handleGenerate = async () => {
    const result = await generateStoryAndImage();
    if (result) {
      const { storyPages, imageUrl } = result;
      console.log(storyPages, imageUrl);
      navigate("/results", {
        state: { storyPages: storyPages, imageUrl: imageUrl },
      });
    }
  };

  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          minWidth:"1000px",
          height: "100vh",
          backgroundColor: "#F2EBB5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
        }}
      >
        <CircularProgress sx={{ color: "#f7c120" }} />
        <h2 style={{ marginTop: "20px", fontSize: "20px" }}>
          GENERATING YOUR STORY...
        </h2>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#F2EBB5",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1> CREATE YOUR STORY </h1>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "end",
        }}
      >
        <h1>1</h1>
        <h2> Subject of the Story</h2>
      </div>
      <TextField
        value={userPrompt}
        onChange={(e) => setUserPrompt(e.target.value)}
        placeholder="Write your story idea here (min. 50 characters)" 
        rows={4}
        multiline
        sx={{
          backgroundColor: "white",
          width: "50%",
          borderRadius: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          "& .MuiInputBase-input::placeholder": {
            color: "#969696",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
          },
        }}
      />
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "end",
        }}
      >
        <h1>2</h1>
        <h2> Personalise your story</h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
        }}
      >
        {["animalsTheme", "superheroesTheme", "educationalTheme"].map(
          (theme) => (
            <img
              key={theme}
              className={`theme-img ${storyType === theme ? "selected" : ""}`}
              src={`/assets/${theme}.png`}
              alt={theme}
              loading="lazy"
              style={{
                cursor: "pointer",
                border: storyType === theme ? "3px solid blue" : "none",
              }}
              onClick={() => setStoryType(theme)}
            />
          )
        )}
      </div>

      <Button
        variant="contained"
        sx={{
          marginTop: "20px",
          borderRadius: "10px",
          backgroundColor: "#f7c120",
          "&:hover": {
            backgroundColor: "#e0a800",
          },
          "&.Mui-disabled": {
            backgroundColor: "#f7c120",
            color: "#FFF",
            cursor: "not-allowed",
            opacity:0.5
          },
        }}
        onClick={handleGenerate}
        disabled={userPrompt.length < 50}
      >
        {"GENERATE STORY"}
      </Button>
      {error && <p style={{ color: "black" }}>{error}</p>}
    </div>
  );
}

export default MainPage;

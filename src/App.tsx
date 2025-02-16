import "./App.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { useGenerateStoryAndImage } from "./hooks/useGenerateStoryAndImage";

function App() {
  const [message, setMessage] = useState('');
  const { story,imageUrl, loading, error, generateStoryAndImage } = useGenerateStoryAndImage(message);
//
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
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your story idea here"
        rows={4}
        multiline
        sx={{
          backgroundColor: "white",
          width: "50%",
          borderRadius: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          '& .MuiInputBase-input::placeholder': {
            color: '#969696',
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
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <img 
        //         src="../public/assets/lapiz.png" // Replace with your image URL
        //         alt="icon" 
        //         style={{ width: '20px', height: '20px' }} 
        //       />
        //     </InputAdornment>
        //   ),
        // }}
      />
       <button onClick={generateStoryAndImage} disabled={loading}>{loading ? 'Generating...' : 'Generate Story and Image'}</button>
       {error && <p style={{ color: 'red' }}>{error}</p>}
       
       {story && (
        <div>
          <h3>Generated Story:</h3>
          <p> {story} </p>
        </div>
       )}

       {imageUrl && (
        <div>
          <h3>Generated image:</h3>
          <img src={imageUrl} alt="Generated"/>
        </div>
       )}
    </div>
  );
}

export default App;

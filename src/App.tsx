import "./App.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { useGenerateStoryAndImage } from "./hooks/useGenerateStoryAndImage";

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
    

  };

  const handleSubmit = () => {
    console.log(inputValue);
  };
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
        placeholder="Write here what you want to happen in your story"
        multiline
        rows={4}
        variant="outlined"
        value={inputValue} 
        onChange={handleChange}
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
       <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;

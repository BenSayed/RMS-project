import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField";
import React from "react";

const TextBox = () => {
  return (
    <div>
      <div className="container">
        <h1 className="title">Hang on! We are under maintenance</h1>
        <p className="subtitle">
          It will not take a long time till we get the error fixed. We will live
          again in
        </p>
        <div className="timer">00 : 04 : 13 : 39</div>
        <div className="email-section">
          {/* <input type="email" placeholder="Enter Your Email" />
          <button>Notify me</button> */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#fef6ed",
              borderRadius: "25px",
              padding: "5px 10px",
              border: "2px solid #ffcc00",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            {/* TextField (Input) */}
            <TextField
              placeholder="Enter Your Email"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: {
                  width: "520px ",
                  padding: " ",
                  fontFamily: "'Arial', sans-serif",
                  fontSize: "16px",
                  color: "#1b1b1b",
                  backgroundColor: "transparent",
                },
              }}
              sx={{
                flex: 1,
              }}
            />

            {/* Button */}
            <Button
              variant="contained"
              sx={{
                height: "48px",
                backgroundColor: "#1b1b1b",
                color: "#fff",
                padding: "10px",
                borderRadius: "16px",
                fontFamily: "'Arial', sans-serif",
                fontSize: "14px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#333333",
                },
              }}
            >
              Notify me
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TextBox;

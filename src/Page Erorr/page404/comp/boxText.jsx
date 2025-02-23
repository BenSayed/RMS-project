import React from "react";
import Button from "@mui/material/Button";
import ErrorNumber from "./ErrorNumber";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const BoxText = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <div style={{ position: "relative" }}>
          <ErrorNumber />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
          <div className="masseg8888">
            <h2>Page not found <br /> We working on it</h2>

            <Button
              endIcon={<ChevronLeftIcon />}
              variant="contained"
              color="warning"
              href="/"
              sx={{ mt: 2, height: "45px", borderRadius: "15px" }}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxText;

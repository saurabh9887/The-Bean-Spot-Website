import React from "react";
import Button from "@mui/material/Button";

const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#4B2E2B", // coffee brown
        color: "#F9F6F1", // ivory white
        padding: "10px 15px",
        fontWeight: 500,
        textTransform: "none",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "#3E2624",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;

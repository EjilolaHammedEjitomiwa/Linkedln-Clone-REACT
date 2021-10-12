import { color } from "@mui/system";
import React from "react";
import "./InputOption.css";

function InputOption({ Icon, title, iconColor }) {
  const iconStyle = {
    color: iconColor,
  };

  return (
    <div className="inputOption">
      <Icon style={iconStyle} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;

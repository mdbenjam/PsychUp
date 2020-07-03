import React from "react";
import { Paper } from "@material-ui/core";
import "./ControlFlow.css";

function ControlFlow() {
  const slides = ["Red", "Blue", "Green", "Yellow"];

  return (
    <div className="ControlFlow">
      <div>
        {slides.map((slide) => (
          <Paper className="ControlFlow__card" elevation={3}>
            {slide}
          </Paper>
        ))}
      </div>
    </div>
  );
}

export default ControlFlow;

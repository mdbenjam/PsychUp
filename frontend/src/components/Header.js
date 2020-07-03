import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">PsychUp</Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;

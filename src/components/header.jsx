import React from "react"
import "./header.css"
import {AppBar, Toolbar} from "@material-ui/core"

const Header = () => {
    const displayDesktop = () => {
        return <Toolbar className="toolbar">The Gauntlet</Toolbar>;
      };
      
      return (
        <header>
          <AppBar className="appbar">{displayDesktop()}</AppBar>
        </header>
      );
}

export default Header

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            color="pink"
            component="div"
            fontSize={35}
            fontFamily={"monospace"}
            fontWeight={700}
          >
            PeachTech
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;

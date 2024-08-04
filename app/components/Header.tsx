import * as React from "react";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

const Header = () => {
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
            color="pink"
            fontSize="30"
            fontFamily="monospace"
            fontWeight="bold"
          >
            PeachTech欅祭アンケート
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;

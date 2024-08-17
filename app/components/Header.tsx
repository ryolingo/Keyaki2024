import { AppBar, Box, Toolbar, Typography } from "@mui/material";
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
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
}

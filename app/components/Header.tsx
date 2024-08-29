import { AppBar, Box, Toolbar, Typography } from "@mui/material";
export default function Header() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
        }}
      >
        <Toolbar variant="dense">
          <img
            src="/momoTech_2.png"
            alt="PeachTech Logo"
            style={{ height: "90px", marginRight: "10px" }}
          />
          <Typography
            color="wihte"
            fontSize="20px"
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

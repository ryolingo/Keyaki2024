import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
export default function Header() {
  return (
    <Box flexGrow={1}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
        }}
      >
        <Toolbar variant="dense">
          <Image
            src="/momoTech_2.png"
            alt="PeachTech Logo"
            width={70}
            height={70}
            priority
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

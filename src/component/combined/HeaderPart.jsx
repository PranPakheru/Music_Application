import React, { useContext } from "react";
import "./HeaderPartStyle.css";
import { AppBar, TextField, Toolbar, Typography } from "@mui/material";

import MyContext from "../../source/context/MyContext";

const HeaderPart = () => {
  const { searchedData, setSearchedData } = useContext(MyContext);

  return (
    <AppBar
      position="sticky"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Play music...
        </Typography>

        <TextField
          id="filled-basic"
          variant="filled"
          value={searchedData}
          placeholder="Search for music…"
          sx={{ width: "500px", backgroundColor: "white", borderRadius: "5px" }}
          onChange={(e) => setSearchedData(e.target.value)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderPart;

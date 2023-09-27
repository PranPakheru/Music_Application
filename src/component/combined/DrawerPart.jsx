import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React, { useContext, useState } from "react";
import "./DrawerPartStyle.css";
import HomeIcon from "@mui/icons-material/Home";
import AlbumIcon from "@mui/icons-material/Album";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";

import MusicNoteIcon from "@mui/icons-material/MusicNote";

import MyContext from "../../source/context/MyContext";

const DrawerPart = () => {
  const drawerWidth = "20%";

  const { setStatus, setSelectedTag, setSearchedData } = useContext(MyContext);
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleClick = (text) => {
    setSelectedItem(text);
    setSearchedData("");

    if (text === "Album") {
      setStatus("album");
      setSelectedTag("90s");
    } else if (text === "Artist") {
      setStatus("artist");
      setSelectedTag("90s");
    } else if (text === "Track") {
      setStatus("track");
      setSelectedTag("90s");
    }
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        backgroundColor: "black",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {["Home", "Album", "Artist", "Track"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={
              text === selectedItem
                ? { backgroundColor: "blue", color: "white" }
                : {}
            }
          >
            <ListItemButton onClick={() => handleClick(text)}>
              <ListItemIcon>
                {index === 0 ? (
                  <HomeIcon sx={text === selectedItem && { color: "white" }} />
                ) : index === 1 ? (
                  <AlbumIcon sx={text === selectedItem && { color: "white" }} />
                ) : index === 2 ? (
                  <ArtTrackIcon
                    sx={text === selectedItem && { color: "white" }}
                  />
                ) : index === 3 ? (
                  <MusicNoteIcon
                    sx={text === selectedItem && { color: "white" }}
                  />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerPart;

import React, { useContext } from "react";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MyContext from "../../source/context/MyContext";
import { useNavigate } from "react-router-dom";
import { AxiosService } from "../../source/service/AxiosService";

const DisplayCardPart = ({ data }) => {
  const { status, searchedData, setAlbumInfo } = useContext(MyContext);
  const navigate = useNavigate();
  const axiosService = new AxiosService();

  const handleClick = (albumArtist, infoAlbum) => {
    if (status === "album") {
      axiosService
        .getAlbumInfo(albumArtist, infoAlbum)
        .then((response) => {
          setAlbumInfo(response.album);

          navigate(`/details`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "30px",
        justifyContent: "space-around",
        margin: "10px",
      }}
    >
      {data &&
        data
          .filter((item) =>
            item.name.toLowerCase().includes(searchedData.toLowerCase())
          )
          .map((songs) => (
            <Card
              sx={{ display: "flex", width: "300px" }}
              onClick={() => handleClick(songs.artist.name, songs.name)}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {status === "album"
                      ? songs.name
                      : status === "artist" || status === "track"
                      ? songs.name
                      : null}
                  </Typography>
                  {/* <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography> */}
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    pl: 1,
                    pb: 1,
                  }}
                >
                  <IconButton aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                  </IconButton>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: "200px" }}
                image={
                  status === "album"
                    ? songs.image[2]["#text"]
                    : status === "artist" || status === "track"
                    ? songs.image[2]["#text"]
                    : null
                }
                alt="image"
              />
            </Card>
          ))}
    </div>
  );
};

export default DisplayCardPart;

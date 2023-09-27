import { Chip } from "@mui/material";
import React, { useContext, useEffect } from "react";

import MyContext from "../../source/context/MyContext";
import { AxiosService } from "../../source/service/AxiosService";
import DisplayCardPart from "./DisplayCardPart";

const DisplayPart = () => {
  const {
    topTags,
    setTopTags,
    topAlbum,
    topArtist,
    status,
    topTracks,
    setTopAlbum,
    setTopArtist,
    setTopTracks,
    selectedTag,
    setSelectedTag,
    setSearchedData,
  } = useContext(MyContext);
  const axiosService = new AxiosService();

  const handleClick = (tagName) => {
    setSearchedData("");
    setSelectedTag(tagName);
    if (status === "album") {
      const selectedTagName = tagName ? tagName : "90s";

      axiosService
        .getTopAlbumByTag(selectedTagName)
        .then((response) => {
          setTopAlbum(response.data.albums.album);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (status === "artist") {
      const selectedTagName = tagName ? tagName : "90s";
      axiosService
        .getTopArtistByTag(selectedTagName)
        .then((response) => {
          setTopArtist(response.data.topartists.artist);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (status === "track") {
      const selectedTagName = tagName ? tagName : "90s";
      axiosService
        .getTopTrackByTag(selectedTagName)
        .then((response) => {
          setTopTracks(response.data.tracks.track);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleRemove = () => {
    setSelectedTag("90s");
    if (status == "album") {
      fetchInitial("album");
    } else if (status == "artist") {
      fetchInitial("artist");
    } else if (status == "track") {
      fetchInitial("track");
    }
  };

  useEffect(() => {
    axiosService
      .getTopTags()
      .then((response) => {
        setTopTags(response.toptags.tag);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (status == "album") {
      fetchInitial("album");
    } else if (status == "artist") {
      fetchInitial("artist");
    } else if (status == "track") {
      fetchInitial("track");
    }
  }, [status]);

  const fetchInitial = (type) => {
    if (type == "album") {
      axiosService
        .getTopAlbumByTag("90s")
        .then((response) => {
          setTopAlbum(response.data.albums.album);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (type == "artist") {
      axiosService
        .getTopArtistByTag("90s")
        .then((response) => {
          setTopArtist(response.data.topartists.artist);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (type == "track") {
      axiosService
        .getTopTrackByTag("90s")
        .then((response) => {
          setTopTracks(response.data.tracks.track);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div>
        {topTags.map((showTags) => (
          <>
            {selectedTag === showTags.name ? (
              <Chip
                color="primary"
                sx={{ margin: 1 }}
                label={showTags.name}
                tagName={showTags.name}
                key={showTags.name}
                onDelete={() => handleRemove()}
              />
            ) : (
              <Chip
                color="success"
                sx={{ margin: 1 }}
                label={showTags.name}
                tagName={showTags.name}
                key={showTags.name}
                onClick={() => handleClick(showTags.name)}
              />
            )}
          </>
        ))}
      </div>

      <div>
        <DisplayCardPart
          data={
            status === "album"
              ? topAlbum
              : status === "artist"
              ? topArtist
              : status === "track"
              ? topTracks
              : null
          }
        />
      </div>
    </div>
  );
};

export default DisplayPart;

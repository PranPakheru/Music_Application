

import {createContext, useState} from 'react';

const MyContext = createContext({
    songData : {}
});


export const MyContextProvider = ({children}) => {

 const [authToken, setAuthToken] = useState("");
 const [topTags, setTopTags] = useState([]);
 const [topAlbum, setTopAlbum] = useState([]);
 const [topArtist, setTopArtist] = useState([]);
 const [ status, setStatus] = useState("");
 const [topTracks, setTopTracks] = useState([]);
 const [selectedTag, setSelectedTag] = useState("90s");
 const [searchedData, setSearchedData] = useState("");
 const [albumInfo, setAlbumInfo] = useState([]);
 const [artistInfo, setArtistInfo] = useState([]);

  return (
    <MyContext.Provider value={{authToken, setAuthToken, topTags, setTopTags, topAlbum, setTopAlbum, 
      topArtist, setTopArtist, status, setStatus, topTracks, setTopTracks, selectedTag, setSelectedTag, 
      searchedData, setSearchedData, albumInfo, setAlbumInfo, artistInfo, setArtistInfo}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContext;


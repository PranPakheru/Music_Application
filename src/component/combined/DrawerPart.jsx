
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import './DrawerPartStyle.css'
import HomeIcon from '@mui/icons-material/Home';
import AlbumIcon from '@mui/icons-material/Album';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useNavigate } from 'react-router-dom';
import  {AxiosService}  from '../../source/service/AxiosService';
import MyContext from '../../source/context/MyContext';
import { blue } from '@mui/material/colors';

const DrawerPart = () => {

    const drawerWidth = "20%";
    const navigate = useNavigate();
    const axiosService = new AxiosService();
    const {topTags, setTopTags, setTopAlbum, setTopArtist, setStatus, setTopTracks, setSelectedTag
    , searchedData, setSearchedData} = useContext(MyContext);
    const [selectedItem, setSelectedItem] = useState("Home");

    

    const handleClick=(text)=>{
      setSelectedItem(text);
      setSearchedData("");
      
       if(text==="Album"){
        setStatus("album");
        setSelectedTag("90s");
        // axiosService.getTopAlbumByTag()
        // .then((response)=>{
        //   console.log(response);
        //   setTopAlbum(response.data.albums.album);
          
        // })
        // .catch((error)=>{
        //   console.log(error);
        // })
      }
      else if(text==="Artist"){
        setStatus("artist");
        setSelectedTag("90s");
        // axiosService.getTopArtistByTag()
        // .then((response)=>{
        //   console.log(response);
        //   setTopArtist(response.data.topartists.artist);
          
        // })
        // .catch((error)=>{
        //   console.log(error);
        // })
      }
      else if(text==="Track"){
        setStatus("track");
        setSelectedTag("90s");
        // axiosService.getTopTrackByTag()
        // .then((response)=>{
        //   console.log(response);
        //   setTopTracks(response.data.tracks.track);
          
        // })
        // .catch((error)=>{
        //   console.log(error);
        // })
      }   
    }
    // axiosService.getTrack()
    // .then((response)=>{
    //   console.log(response);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })

  return (
    <Drawer
        sx={{
           
          width: drawerWidth,
          backgroundColor:"black",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Home', 'Album', 'Artist', 'Track'].map((text, index) => (
            <ListItem key={text} disablePadding 
            sx={text === selectedItem ? {backgroundColor:'blue', color:'white'} : {}}
            >
              <ListItemButton onClick={()=>handleClick(text)}>
                <ListItemIcon>
                  {index === 0 ? <HomeIcon sx={text === selectedItem && {color:"white"} } /> : index === 1 ? <AlbumIcon sx={text === selectedItem && {color:"white"} } /> : index === 2 ? <ArtTrackIcon sx={text === selectedItem && {color:"white"} }/> : 
                   index === 3 ?  <MusicNoteIcon sx={text === selectedItem && {color:"white"} }/> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      
         
            {/* <ListItem  disablePadding >
              <ListItemButton onClick={handleClick}>
                <ListItemIcon ><HomeIcon /> </ListItemIcon>
                <p className='listName'>Home</p>
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon ><HomeIcon /> </ListItemIcon>
                <p className='listName'>Album</p>
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon ><HomeIcon /> </ListItemIcon>
                <p className='listName'>Artist</p>
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon ><HomeIcon /> </ListItemIcon>
                <p className='listName'>Genre</p>
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon ><HomeIcon /> </ListItemIcon>
                <p className='listName'>Track</p>
              </ListItemButton>
            </ListItem> */}
     
      
        
      </Drawer>
  )
}

export default DrawerPart
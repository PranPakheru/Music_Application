
import { Box, Card, CardContent, CardMedia, Chip, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import MyContext from '../../source/context/MyContext';
import { AxiosService } from '../../source/service/AxiosService';
import DisplayCardPart from './DisplayCardPart';

const DisplayPart = () => {

    const theme = useTheme();
    const {topTags, setTopTags, topAlbum, topArtist, status, topTracks, setTopAlbum, setTopArtist,
      setTopTracks, selectedTag, setSelectedTag, searchedData, setSearchedData} = useContext(MyContext);
    const axiosService = new AxiosService();
    
    // console.log(topTags.data);
    // console.log(topTags.data.toptags);
    // console.log(topTags.data.toptags.tag);
    // console.log(topTags.data.toptags.tag[0]);

    useEffect(()=>{
      // axiosService.getAlbumInfo()
      // .then((response)=>{
      //   console.log(response);
      // })
      // .catch((error)=>{
      //   console.log(error);
      // });

      // axiosService.getArtistInfo()
      // .then((response)=>{
      //   console.log(response);
      // })
      // .catch((error)=>{
      //   console.log(error);
      // });
      
    }, [])

    const handleClick=(tagName)=>{
      setSearchedData("");
      setSelectedTag(tagName);
      if(status==="album"){
        const selectedTagName = tagName ? tagName : "90s"; 
        // console.log(tagName);
          axiosService.getTopAlbumByTag(selectedTagName)
        .then((response)=>{
          console.log(response);
          setTopAlbum(response.data.albums.album);
        })
        .catch((error)=>{
          console.log(error);
        })
      }
      else if(status==="artist"){
        const selectedTagName = tagName ? tagName : "90s"; 
        axiosService.getTopArtistByTag(selectedTagName)
        .then((response)=>{
          // console.log(response);
          setTopArtist(response.data.topartists.artist);
          
        })
        .catch((error)=>{
          console.log(error);
        })
      }
      else if(status==="track"){
        const selectedTagName = tagName ? tagName : "90s";
        axiosService.getTopTrackByTag(selectedTagName)
        .then((response)=>{
          // console.log(response);
          setTopTracks(response.data.tracks.track);
          
        })
        .catch((error)=>{
          console.log(error);
        })
      }
      
    }

    const handleRemove=()=>{
      setSelectedTag("90s");
      if(status=="album"){
        fetchInitial("album");
      }
      else if(status=="artist"){
        fetchInitial("artist");
      }
      else if(status=="track"){
        fetchInitial("track");
      }
      // const updatedTopTags = topTags.filter((tag) => tag.name != tagNameToRemove);
      // setTopTags(updatedTopTags);
      // handleClick(updatedTopTags);
    }

    useEffect(()=>{
      axiosService.getTopTags()
      .then((response)=>{
        // setTopTags(response);
        setTopTags(response.toptags.tag);
        // console.log(topTags);
        // setLoader(false);
      })
      .catch((error)=>{
        console.log(error);
        // setLoader(false);
      })
      
    }, [])

    useEffect(()=>{
      if(status=="album"){
        fetchInitial("album");
      }
      else if(status=="artist"){
        fetchInitial("artist");
      }
      else if(status=="track"){
        fetchInitial("track");
      }
    }, [status])

    const fetchInitial=(type)=>{
      if(type=="album"){
        axiosService.getTopAlbumByTag("90s")
      .then((response)=>{
        // console.log(response);
        setTopAlbum(response.data.albums.album);
      })
      .catch((error)=>{
        console.log(error);
      })
      }
      else if(type=="artist"){
        axiosService.getTopArtistByTag("90s")
        .then((response)=>{
          // console.log(response);
          setTopArtist(response.data.topartists.artist);
          
        })
        .catch((error)=>{
          console.log(error);
        })
      }
      else if(type=="track"){
        axiosService.getTopTrackByTag("90s")
        .then((response)=>{
          // console.log(response);
          setTopTracks(response.data.tracks.track);
          
        })
        .catch((error)=>{
          console.log(error);
        })
      }
      
    }

  return (
    // <Card sx={{ display: 'flex', width:"300px" }}>
    //   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //     <CardContent sx={{ flex: '1 0 auto' }}>
    //       <Typography component="div" variant="h5">
    //         Live From Space
    //       </Typography>
    //       <Typography variant="subtitle1" color="text.secondary" component="div">
    //         Mac Miller
    //       </Typography>
    //     </CardContent>
    //     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"space-around", pl: 1, pb: 1 }}>
         
    //       <IconButton aria-label="play/pause">
    //         <PlayArrowIcon sx={{ height: 38, width: 38 }} />
    //       </IconButton>
          
    //     </Box>
    //   </Box>
    //   <CardMedia
    //     component="img"
    //     sx={{ width: "100px" }}
    //     image="/static/images/cards/live-from-space.jpg"
    //     alt="Live from space album cover"
    //   />
    // </Card>
    <div>
      
      <div >
      {
      topTags.map((showTags)=>
      <>
      {selectedTag === showTags.name ? 
        <Chip color="primary" sx={{margin:1}} label={showTags.name} tagName={showTags.name} key={showTags.name} onDelete={()=>handleRemove()} /> 
        :
        <Chip color="success" sx={{margin:1}} label={showTags.name} tagName={showTags.name} key={showTags.name} onClick={()=>handleClick(showTags.name)} />
      }
      </>
      
      // <>
      //   <Chip color="success" sx={{margin:1}} label={showTags.name} tagName={showTags.name} key={showTags.name} onClick={()=>handleClick(showTags.name)} />
      // </>
      )
      }
      </div>
      
      <div>
        <DisplayCardPart data={status==="album" ? topAlbum : status==="artist" ? topArtist : status==="track" ? topTracks : null} />
      </div>
        
        
      
    </div>
    
  )
}

export default DisplayPart
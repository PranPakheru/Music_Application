
import React, { useContext, useEffect, useState } from 'react'
import { AxiosService } from '../../source/service/AxiosService'
import MyContext from '../../source/context/MyContext';
import './DetailsPageStyle.css'
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const axiosService = new AxiosService();
  const {status, albumInfo} = useContext(MyContext);
  const navigate = useNavigate();


  useEffect(()=>{
  
        console.log(albumInfo);
      
  }, [])

  const handleClick=()=>{
    navigate(`/combinedPage`);
  }


  return (
    <div className='displayPartSong'>
      <button onClick={handleClick}>Go back</button>
      {albumInfo &&   
      <div>
      <div className='image'>
      <img src={albumInfo.image[3]['#text']} alt='image' />
      </div>
      <div className='otherDetails'>
        <h3>Album name: {albumInfo.name}</h3>
        <h3>Artist name: {albumInfo.artist}</h3>
      </div>
     </div>
        
      }
        
    </div>
  )
}

export default DetailsPage

import React, { useContext, useEffect, useState } from 'react'
import './CombinedPageStyle.css'
import HeaderPart from './HeaderPart'
import DrawerPart from './DrawerPart'
import DisplayPart from './DisplayPart'
import { AxiosService } from '../../source/service/AxiosService'
import { useLocation } from 'react-router-dom';
import MyContext from '../../source/context/MyContext'


const CombinedPage = () => {

  
  const axiosService = new AxiosService();
  const {authToken, setAuthToken, topTags, setTopTags} = useContext(MyContext);
  // const [tags, setTags] = useState([]);
  // const [loader, setLoader] = useState(false);

  const location = useLocation();
  useEffect(()=>{
    const param = new URLSearchParams(location.search);
    const token = param.get('token');
    setAuthToken(token);
    // console.log(token);
  }, []);

  useEffect(()=>{
    // setLoader(true);
    if(authToken && authToken.length>0){
      axiosService.fetchServiceSession(authToken)
    .then((response)=>{
      // console.log(response);
      // setLoader(false);
    })
    .catch((error)=>{
      console.log(error);
      // setLoader(false);
    });

    // setLoader(true);
    
    }

  }, [authToken])

  


 


  

  // useEffect(()=>{
  //   axiosService.fetchAccessToken()
  //   .then((response)=>{
  //     console.log(response);
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
    
  // }, []);


  return (
    <div className='CPBackground'>
      <div >
      <HeaderPart />
      </div>
      
      <div className='sideBySide'>
        <div className='CPDrawer'>
          <DrawerPart />
        </div>
   
      
        <div className='cards'>
        <DisplayPart />
      </div>
      
      
      </div>
      
        
    </div>
  )
}

export default CombinedPage
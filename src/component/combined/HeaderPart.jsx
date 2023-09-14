
import React, { useContext, useState } from 'react'
import './HeaderPartStyle.css'
import { AppBar, TextField, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MyContext from '../../source/context/MyContext';


const HeaderPart = () => {

  const [searchValue, setSearchValue] = useState("");
  const {searchedData, setSearchedData} = useContext(MyContext);

  // console.log(searchValue);

  const Search = styled('div')(({ theme }) => ({
    position: 'sticky',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '32ch',
        '&:focus': {
          width: '70ch',
        },
      },
    },
  }));


  return (
    // <AppBar position="sticky">
    // <Toolbar>
    //   <Typography
    //     variant="h6"
    //     noWrap
    //     component="div"
    //     sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    //   >
    //     Play music...
    //   </Typography>
    <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Play music...
          </Typography>
      {/* <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        
      </Search> */}
      {/* <input
          placeholder="Search for music…"
          // inputProps={{ 'aria-label': 'search' }}
          value={searchedData}
          onChange={(e)=>setSearchedData(e.target.value)}
        /> */}
         <TextField id="filled-basic" variant="filled" value={searchedData}  placeholder="Search for music…"
         sx={{width:"500px", backgroundColor:"white", borderRadius:"5px"}}
          onChange={(e)=>setSearchedData(e.target.value)}/>
    </Toolbar>
  </AppBar>
  )
}

export default HeaderPart
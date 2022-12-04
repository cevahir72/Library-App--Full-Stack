import {useState,useEffect} from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";


//STYLES  /////////////////////////////////

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  flex:"2",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  maxWidth: '80%',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '80%',
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const ColorButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: "#f99f64",
  '&:hover': {
    backgroundColor: "#f9b080",
  },
}));

//////////STYLES ENDS ////////////////////////////////////////////

const Header = ({keyword, setKeyword}) => {

  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:'#019898', height:"10vh",display:"flex", alignItems:"center", justifyContent:'center'}}>
        <Toolbar sx={{minWidth:'90%'}}>
          

          {/* Tipografi : BUYUK OLAN */}
          
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, flex:"1", fontWeight:'600' }}
          >
            IWAS TECH
          </Typography>

          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={keyword}
              onChange={(e)=>setKeyword(e.target.value)}
            />
          </Search>
            <ColorButton variant='contained' endIcon={<SendIcon/>}>
              Search
            </ColorButton>

          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flex:"1" , justifyContent:"end"}}>
            {/* ADD NEW RECORD BUTONU */}
                <ColorButton variant="contained" onClick={()=>navigate("/create")}>ADD NEW RECORD</ColorButton>
          </Box>


          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header

                            //  Navbar is made by Rajmal Varma ...................
<<<<<<< HEAD
import './navbar.css'
import { Input, Search } from '@mui/icons-material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react'
import { Container } from '@mui/system';
=======
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.css"
>>>>>>> a21ad610ce33fc9fe754de93be0acf1ce8c5f1f9


const Navbar = () => {
  return (
<<<<<<< HEAD
    
    <Container className="container">
      <div className = "subcontainer">
      <Search className = "Search" >
        <input placeholder='search for videos'/>
        
      </Search>
      </div>
      

   </Container>
   
=======
    <div className="sticky flex items-center justify-end top-0 h-[56px] py-0 px-4 bg-[#202020]">
      <div className="search">
    <input type="text" placeholder= "Search"/>
   <SearchOutlinedIcon/>
      </div>
      
      <Link to="signin">
      <button className="btn">
        <AccountCircleOutlinedIcon/>
        Sign In
      </button>
      </Link>
    </div>
>>>>>>> a21ad610ce33fc9fe754de93be0acf1ce8c5f1f9
  )
}

export default Navbar


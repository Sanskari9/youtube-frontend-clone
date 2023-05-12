
                            //  Navbar is made by Rajmal Varma ...................
import './navbar.css'
import { Input, Search } from '@mui/icons-material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react'
import { Container } from '@mui/system';


const Navbar = () => {
  return (
    
    <Container className="container">
      <div className = "subcontainer">
      <Search className = "Search" >
        <input placeholder='search for videos'/>
        
      </Search>
      </div>
      

   </Container>
   
  )
}

export default Navbar


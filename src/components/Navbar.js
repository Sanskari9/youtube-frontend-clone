
                            //  Navbar is made by Rajmal Varma ...................
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.css"


const Navbar = () => {
  return (
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
  )
}

export default Navbar



                            //  Navbar is made by Rajmal Varma ...................
import './navbar.css'
import { Search } from '@mui/icons-material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react'


const Navbar = () => {
  return (
    <>
    <div>
      <Search>
    <input type="" placeholder=' Search for videos'/>
   <SearchOutlinedIcon/>
      </Search>
      <button>
        <AccountCircleOutlinedIcon/>
        Sign In
      </button>
    </div>
    </>
  )
}

export default Navbar


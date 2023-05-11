
                            //  Navbar is made by Rajmal Varma ...................
import './navbar.css'
import { Search } from '@mui/icons-material'
<<<<<<< HEAD:src/components/Topbar/Navbar.js
import {SearchOutlinedIcon} from '@mui/icons-material/SearchOutlinedIcon'
import {AccountCircleOutlinedIcon} from '@mui/icons-material/AccountCircleOutlined'
import styled from 'styled-components'
import { Container } from '@mui/material'
=======
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
>>>>>>> 7a07678cb6be04314411c3a7af334b7ab47a37ba:src/components/Navbar.js
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


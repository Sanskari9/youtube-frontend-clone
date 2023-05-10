
                            //  Navbar is made by Rajmal Varma ...................

import { Search } from '@mui/icons-material'
import {SearchOutlinedIcon} from '@mui/icons-material/SearchOutlinedIcon'
import {AccountCircleOutlinedIcon} from '@mui/icons-material/AccountCircleOutlinedIcon'
import styled from 'styled-components'
import { Container } from '@mui/material'
import React from 'react'
const Wrapper = styled.div`
   height:30px,
   background-color: black
`

const Navbar = () => {
  return (
    <Container>
    <Wrapper>
      <Search>
    <input type="text" placeholder=' Search for videos'/>
   <SearchOutlinedIcon/>
      </Search>
      <button>
        <AccountCircleOutlinedIcon/>
        Sign In
      </button>
    </Wrapper>
    </Container>
  )
}

export default Navbar


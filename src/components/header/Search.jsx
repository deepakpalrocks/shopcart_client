// import styled from '@emotion/styled'
import { InputBase,Box ,styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const StyleSearch=styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left:10px ;
    margin-bottom:7px;
    display:flex;
` 
const Inputfeild=styled(InputBase)`
    margin-left:20px;
    width:100%;
    font-size : 'unset';
`
const SearchIconstyle=styled(SearchIcon)`
    color:blue;
    padding:5px;
    margin-left:70px;
`
const Search = () => {
  return (
    <StyleSearch>
        <Inputfeild
            placeholder='Search for products , brands and more'
        />
        <Box>
            <SearchIconstyle />
        </Box>
    </StyleSearch>
  )
}

export default Search
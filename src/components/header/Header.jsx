import React from 'react'
// import styled from '@emotion/styled';
import {AppBar,Box,Toolbar,Typography,styled} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';


const StyledHeader=styled(AppBar)`
    background:#2874f0;
    height:55px;
`
const Component=styled(Box)`
    margin-left:12%;
`
const SubHeading=styled(Typography)`
    font-size:10px,
    font-style:italic;
`
const PlusImage=styled('img')({
    width:10,
    height:10
})
const Header = () => {
    const logoUrl= 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
return (

    <StyledHeader >
        <Toolbar>
            <Component>
                <img  scr={logoUrl} alt='logo' style={{width:75}} />
                 <Box style={{display:'flex'}} >
                 <SubHeading >Explore
                 <Box component='span' style={{color:'yellow'}}>Plus</Box>
                 </SubHeading>
                 <PlusImage scr={subURL} alt='+' />
                 </Box>
            </Component>
             <Search/>
            <Box>
             <CustomButtons/>
            </Box>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header
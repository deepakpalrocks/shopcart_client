import React, { useState } from 'react'
import {Box, Typography ,styled,Menu,MenuItem} from '@mui/material'
// import PowerSettingsNewIcon from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
const Component=styled(Menu)`
    margin-top:5px;
`
const Logout=styled(MenuItem)`
    font-size:14px;
    margin-left:20px;
`


const Profile = ({account,setAccount}) => {
const [open,setOpen]=useState(false);
const handleClick=(event)=>{
    setOpen(event.currentTarget);
}
const handleClose=()=>{
    setOpen(false);
}
const logoutUser=()=>{
    setAccount('');
}

  return (
    <>
        <Box onClick={handleClick} >
            <Typography  style={{marginTop:5, cursor:'pointer'}}>{account}</Typography>
        </Box>
            <Component
            anchorEl={open}
            open={Boolean (open)}
            onClose={handleClose}
            >
            <MenuItem onClick={()=>{handleClose();logoutUser();}}>
                <LogoutIcon color="primary" fontSize="small"/>
                <Logout>Logout</Logout>
            </MenuItem>
            </Component>
    </>
  )
}

export default Profile
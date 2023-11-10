import {useState,React,useContext} from 'react'
import {Box, Button, Typography,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import  DataContext from '../../context/DataProvider'
import Profile from './Profile';

const Wrapper=styled(Box)`
    display:flex;
    margin:0 3% 0 auto;
    & > Button,&>p,&>div{
        margin-right:40px;
        font-size:14px;
    }
`
const LoginButton=styled(Button)`
    text-transform:none;
    margin-bottom:7px;
`

const CustomButtons = () => {
 const [open,setOpen]=useState(false);
 const { account,setAccount } = useContext(DataContext);
 const openDialog=()=>{
    setOpen(true);
 }
 
  return (
    <Wrapper>
    {
        account ?   <Profile account={account} setAccount={setAccount} /> :
        <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
    }
        {/* <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton> */}
        <Typography style={{marginTop:5 ,width:150}}>Become a Seller</Typography>
        <Typography style={{marginTop:5}}>More</Typography>
        <Box>
            <ShoppingCartIcon />
            <Box >Cart</Box>
        </Box>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons
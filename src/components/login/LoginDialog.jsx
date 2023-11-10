import { Box,Dialog, TextField, Typography,styled ,Button} from "@mui/material";
import { useState ,useContext} from "react";
import { authenticateSignup ,authenticateLogin } from "../services/api";
// import DataContext from "../../context/DataProvider";

const Component=styled(Box)`
    height:70vh;
    width: 90vh;
    display:flex;
`
const Image=styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:78.8%;
    width:30%;
    padding:45px 35px;
`
const Wrapper=styled(Box)`
    display:flex;
    flex-direction:column;
    justify-content: center;
    padding:25px 35px;
    flex:1;
    &>div,&>button,&>p{
        margin-top:12px;
    }
`
const LoginButton=styled(Button)`
    text-Transform:none;
    background:#FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
`
const RequestOtp=styled(Button)`
    text-transform:none;
    background:#FFF;
    color:#2874F0;
    height:48px;
    border-radius:2px;
`
const Error=styled(Typography)`
    color:#ff6161;
    font-size:14px;
    font-weight:600;
    line-height:0;
    margin-top:10px;
`
const accountinitialValue={
    login:{
        view:'login',
        heading:'Login'
    },
    signup:{
        view:'signup',
        heading:'Signup'
    }
}
const signupinitialValue={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
}
const logininitialvalue={
    username:"",
    password:""
}

const LoginDialog=({open,setOpen,setAccount})=>{
    const [account,toggleAccount]=useState(accountinitialValue.login);
    const [signup,setSignup]=useState(signupinitialValue);
    const [login,setLogin]=useState(logininitialvalue);
    const [error,setError]=useState(false);
    // const { setAccount }=useContext(DataContext);
    // console.log(setAccount);
    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }
    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
        // console.log(signup);
    }
    const loginUser=async()=>{
        let res=await authenticateLogin(login);
        console.log(res);
        if(res){
            handleClose();
            setAccount(res.data.data.firstname);
        }
        else{
            setError(true);
        }
    }
    const signupUser=async()=>{
        let res=await authenticateSignup(signup);
        if(!res)return ;
        handleClose();
        setAccount(signup.firstname);
    }
    const toggleSignup=()=>{
        toggleAccount(accountinitialValue.signup);
    }
    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountinitialValue.login);
        setError(false);
    }
    return (
        <Dialog open={open} onClose={()=>handleClose()} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component >
                <Image>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{marginTop:20}}>Get Access to your Orders , Wishlist and Recomendation</Typography>   
                </Image>
                {
                    account.view==='login' ?
                    <Wrapper>
                    <TextField variant="standard"  onChange={(e)=>onValueChange(e)} name='username' label="Enter UserName"/>
                    {error&&<Error>Enter Correct UserName or Password</Error>}
                    <TextField variant="standard" onChange={(e)=>onValueChange(e)} name='password'   label="Enter Password"  />
                    <Typography style={{fontSize:14, color:'grey'}}>By continuing,by agree ShopCart's Terms of use and Privacy Policy</Typography>
                    <LoginButton onClick={loginUser}>Login</LoginButton>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <RequestOtp>Request OTP</RequestOtp>
                    <Typography style={{fontSize:14 ,cursor:'pointer'}} onClick={()=>toggleSignup()}>New to ShopCart?create an account</Typography>
                    </Wrapper>
                : 
                    <Wrapper >
                    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='firstname' label="Enter FirstName"  />
                    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='lastname' label="Enter LastName"  />
                    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='username' label="Enter UserName"  />
                    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='email' label="Enter Eamil"  />
                    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='password' label="Enter Password"  />
                    <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='phone' label="Enter Phone"  />
                    <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>  
                    </Wrapper>
                }
            </Component>
        </Dialog>
    )
}
export default LoginDialog;
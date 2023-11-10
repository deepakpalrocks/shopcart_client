import NavBar from './NavBar'
import Banner from './Banner'
import { Box,styled } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
const Component=styled(Box)`
    background:#F2F2F2;
    padding:10px;
`
const Home = () => {
  const {products}=useSelector(state=>state.getProducts); //here getProducts is var in store.js which store state in it
  console.log(products);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);
  return (
    <>
        <NavBar/>
        <Component>
            <Banner/>
        </Component>
        
    </>
  )
}

export default Home
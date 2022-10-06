import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import cartReducer from '../redux/reducers/reducer'

const Navbar = ()=> {

    const getData = useSelector((state)=> state.cartReducer ) //here state means global/all the  states present in our application
    console.log(getData) //now we can use cartReducer anywhere in our file

    const [show,setShow] = useState(false)
  return (
    <Container >
        <Left>
            <li><Link className='nav-bar-links' to='/'>home</Link></li>
            <li><Link className='nav-bar-links' to='/about'>about</Link></li>
        </Left>
        <Right>
            <a className='cart-button' onClick={()=>{
                (show)?setShow(false):setShow(true)
                console.log(show)
            }}>cart <a className='cart-length'>{cartReducer.length}</a></a>

            <div className='cart-menu'
            style={{display:(show)?'block':'none'}}
            >
                <img src='/images/plus.png' 
                onClick={()=>{
                    (show)?setShow(false):setShow(true)
                }}
                ></img>
                <div>your cart is empty</div>
            </div>
        </Right>
    </Container>
  )
}


export default Navbar

const Container = styled.div`
user-select:none;
z-index:99;
font-size:17px;width:100%;height:5rem;  background-color: rgb(20, 10, 50);color:white;display:flex;align-items:center;justify-content:space-between;
`
const Left = styled.div`display:flex;align-items:center;justify-content:center;

   .nav-bar-links{  color:white;text-decoration:none;   }
   li{ list-style-type:none;margin:0 2rem;cursor:pointer;}
`
const Right = styled.div`
margin:0 2rem;cursor:pointer;
    img{
        width:18px;transform:rotate(45deg);position:absolute;right:1rem;
    }
   .cart-menu{
    font-size:20px;
     width:500px;
     margin:1rem 0;
     height:100px;
    position:absolute;
    background-color: rgb(249, 0, 95);
    right:2rem;
    border-radius:.3rem;
    box-shadow:1px 1px 6px 1px  grey;
    color:white;
    padding:1rem;
   }

   .cart-menu>div{
    margin:1rem ;
    z-index:100;
   }

   .cart-length{
    padding:.5rem 1rem;
    background-color: rgb(0, 94, 255);
    border-radius:100px;
   }

`
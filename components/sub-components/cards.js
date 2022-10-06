import React from 'react'
import styled from 'styled-components'

export function heyy(){
  console.log('say hi')
}
export default  function Cards({url,name,price}) {
  function openCart(){
    alert('say hi babe')
  }
  return (
    <Container>
        <img src={url} ></img>
        <Text>
            <h1>{name}</h1>
            <h3>price : ₹ {price}</h3>
            <button onClick={()=>{openCart()}}>add to cart</button>
        </Text>
    </Container>
  )
}

const Container = styled.div`position:relative;z-index:-1;
display:flex;align-items:center;justify-content:flex-start;flex-direction:column;width:300px;height:350px;
cursor:pointer;transition:.21s linear;box-shadow:1px 1px 8px 2px grey;
:hover{
    transform:translateY(-10px);
}
img{width:90%;height:60%;padding:10px;position:relative;}

`
const Text = styled.div`
border-top:2px solid grey;
padding:1rem;
text-align:center;width:100%;
button{
    width:200px;
    height:2rem;
    margin-top:.5rem;
    cursor:pointer;
    background:linear-gradient(orange,red);
    border:none;
    color:white;
    font-size:15px;
}
`

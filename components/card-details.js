import React from 'react'
import styled from 'styled-components'

export default function CardDetails() {
  return (
    <Container>
            <div className='title'>CARD DDETAILS</div>
            <Main>
                <h2 className='restaurant-name'>Restaurant : gobar</h2>

                <div className='mid-section'>
                    <img src='/images/burger.png'></img>

                    <Grid>
                        <div className='middle'>
                            <h3>dish : <span>bihari bhojpuri chawal</span></h3>
                            <h3>price : <span >123</span></h3>
                            <h3>total : <span>1000</span></h3>
                        </div>
                        <div className='right'>
                            <h3>ratings : <span className='ratings'> 3.4 </span> </h3>
                            <h3>order review : <span> 10 people ordered this item yesterday</span></h3>
                            <button className='remove'>remove</button>
                        </div>
                    </Grid>
                </div>

                <div className='quantity-section'>
                    <button>-</button>
                    <h3>1</h3>
                    <button>+</button>
                </div>
            </Main>
    </Container>
  )
}

const Container = styled.div`
display:grid;place-items:center;
row-gap:3rem;
button{
    cursor:pointer;
}
.title{font-size:30px}
`
const Main = styled.div`
padding:1rem;width:70vw;height:70vh;box-shadow:2px 2px 12px 3px grey;
display:grid;place-items:center;grid-template-columns:1fr;text-align:center;
>h2{
    width:100%;
}
.mid-section{
    width:100%; grid-row:2/span 10 ;height:100%;
    display:grid;grid-template-columns:repeat(2,1fr);column-gap:1rem;place-items:center;
}
.mid-section>img{
    width:300px;heiht:300px
}
.quantity-section{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    height:3rem;

}
.quantity-section button{
    width:3rem;
    height:100%;
    background-color: rgba(178, 178, 178, .8);
    border:none;
    font-size:30px;
}
.quantity-section h3{
    display:grid;
    place-items:center;
    width:5rem;
    font-size:25px;
    height:100%;
    background-color: rgba(178, 178, 178, .8);
    border-right:2px solid grey;
    border-left:2px solid grey;
}
`
const Grid = styled.div`
grid-column:3/span 5;height:300px;padding:1rem;
display:grid;display:grid;grid-template-columns:repeat(2,1fr);column-gap:1rem;place-items:center;
.middle , .right{
    display:flex;align-items:center;justify-content:space-evenly;flex-direction:column;height:100%;
}
 h3{
    font-weight:bolder;text-transform:uppercase;
}
h3 span{
    font-weight: lighter;
}

.ratings{ padding:5px 1.5rem;  background: rgb(9, 175, 47);border-radius:.7rem;}
.remove{background:red;outline:none;border-radius:.1rem;border:none;height:2rem;width:6rem;}

`
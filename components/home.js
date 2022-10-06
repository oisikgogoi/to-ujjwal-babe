import React,{ useState} from 'react'
import CardsData from './sub-components/cards-data'
import Cards,{heyy} from './sub-components/cards'
import styled from 'styled-components'

export default function Home() {
   heyy()

    const [data,setData] = useState(CardsData)
  return (
    <>
    <h1 style={{textAlign:"center"}}>Zoo Meto</h1>

    <Container>
        <Sub>
    {  data.map(e=>{
            return(
                <>
                <Cards url={`${e.img}`}  name={`${e.name}`}  price={`${e.price}`} />
                </>
            )
        })}
        </Sub>
    </Container>
    </>
  )
}

const Container = styled.div`
display:grid;place-items:center;
`

const Sub = styled.div`
width:76%;
margin-top:2rem;
display:grid;
grid-template-columns:repeat(3,1fr);
row-gap:2rem;
column-gap:2rem;
`
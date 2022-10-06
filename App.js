import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import {Routes,Route} from 'react-router-dom'
import CardDetails from './components/card-details';



function App() {
  return (
      <>
          <Navbar /> 
          <Routes>
            <Route path='/' element={<Home /> }/>
            <Route path='/cart-details' element={<CardDetails /> }/>
          </Routes>
          
     </>

  );
}

export default App;

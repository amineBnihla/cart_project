
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import Cart from './pages/cart';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className=''>
    <div className='container mx-auto  py-5'>
     <Routes>
   <Route element={<Home/>} path='/'></Route>
   <Route element={<Cart/>} path='/cart'></Route>
     </Routes>
    </div>
     </div>
    </div>
  );
}

export default App;

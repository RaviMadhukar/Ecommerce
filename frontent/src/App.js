import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import banner1 from './Components/Assets/puja.png';
import banner2 from './Components/Assets/mosquito.png';
import banner3 from './Components/Assets/backflow.png';
import banner4 from './Components/Assets/brass.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='puja' element={<ShopCategory banner={banner1} category="puja"/>}/>
          <Route path='mosquito' element={<ShopCategory banner={banner2} category="mosquito"/>}/>
          <Route path='backflow' element={<ShopCategory banner={banner3} category="backflow"/>}/>
          <Route path='brass' element={<ShopCategory banner={banner4} category="brass"/>}/>
          <Route path='product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;

import Header from './Header/Header';
import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Products from './Products/Products';
import ProductID from './Products/ProductID';
import Footer from './Footer/Footer';
import AdminPage from './Components/Login/AdminPage';
import ProtectedRoute from './Routes/ProtectedRoute';
import About from './Header/About'
import AllProducts from './Products/AllProducts'
import CreateProduct from './Products/CreateProduct';
import EditProduct from './Products/EditProduct';
import DeleteProduct from './Products/DeleteProduct';



function App() {
  const [count,setCount]=useState(0)
  const handleClick =()=>{setCount(count+1)}
  return (
    <div className="App">
<Header count={count}/>
<div className='Content'>
  <Routes>
  <Route path="/" element={<Products handleClick={handleClick}/>}/>
            <Route path='/product/:id' element={<ProductID handleClick={handleClick}/>} />
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/about' element={< About/>}/>
            <Route path='/admin' element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
            <Route path='/products' element={<AllProducts />} />
            <Route path = '/createproduct'  element={<CreateProduct />} />
            <Route path = '/updateproduct/:id' element ={<EditProduct />} />
            <Route path='/deleteproduct/:id' element = {<DeleteProduct/>} />

  </Routes>

</div>
<Footer />
    </div>
  );
}

export default App;

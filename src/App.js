import Header from './Header/Header';
import { Routes, Route} from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Products from './Products/Products';
import ProductID from './Products/ProductID';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
<Header />
<div className='Content'>
  <Routes>
  <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<ProductID />} />
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            {/* <Route path='/loggedin/admin' element={<LoggedInAdmin />}/>
            <Route path='/loggedin/user' element={<LoggedInUser />}/> */}

  </Routes>

</div>
<Footer />
    </div>
  );
}

export default App;

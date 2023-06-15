import Header from './Header/Header';
import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Products from './Products/Products';
import ProductID from './Products/ProductID';
import Footer from './Footer/Footer';

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
            {/* <Route path='/loggedin/admin' element={<LoggedInAdmin />}/>
            <Route path='/loggedin/user' element={<LoggedInUser />}/> */}

  </Routes>

</div>
<Footer />
    </div>
  );
}

export default App;


import { Link } from "react-router-dom"
import './Products.css'
import {useEffect,useState} from 'react'
export default function Products({handleClick}) {
  
const [jewelry,setJewelry] = useState([]);
useEffect(()=>{
  fetch("http://localhost:5000/allproducts")
  .then(res=>res.json())
  .then(res=>setJewelry(res));
 
},[])
 
 console.log(jewelry)

  return (

    <div className="container">
      
      {jewelry.map((item) => (
        <div key={item.id} className="item">
          <Link to={`/product/${item.id}`}>
            <img src={`http://localhost:5000/${item.image}`} alt={item.name} className="image" />
          </Link>
          <h2 className="name">{item.name}</h2>
          <p className="price">{item.price}</p>
        
          <button onClick={handleClick}>Add to cart </button>
        </div>
      ))}
    </div>
  );
}


























































          
  

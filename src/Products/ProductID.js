import { useParams } from 'react-router-dom';
import {useEffect,useState} from 'react';
import './ProductID.css';


export default function ProductID({handleClick}) {
  const { id } = useParams();
  const [jewelry,setJewelry] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/product/"+id)
    .then(res=>res.json())
    .then(res=>setJewelry(res));
  },[])
  return (
    <div className="more_info">
      <img src={`http://localhost:5000/${jewelry.image}`} alt="" className="images" />
      <div className="info">
        <h2>{jewelry.name}</h2>
        <p className="des">{jewelry.description}</p>
        <h3>{jewelry.price}</h3>
        <button onClick={handleClick}>Add to cart </button>
       
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import './AllProducts.css'

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/allproducts')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <button>
          <Link to="/createproduct">New Product</Link>
        </button>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            {/* <th>Quantity</th> */}
            <th>CategoryId</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              {/* <td>{product.quantity}</td> */}
              <td>{product.categoryId}</td>
            
              <td>
                <img
                  src={`http://localhost:5000/${product.image}`}
                  alt="Product"
                  style={{ width: '100px', height: '100px' }}
                />
              </td>
              <td>
                <Link to={`/updateproduct/${product.id}`}>
                  <RiEdit2Line />
                </Link>
                <Link to={`/deleteproduct/${product.id}`}>
                  <RiDeleteBinLine />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/admin')}>Back</button>
    </div>
  );
}
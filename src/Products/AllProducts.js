import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import './AllProducts.css';

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [isDel, setIsDel] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/allproducts')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const deleteProduct = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(
        `http://localhost:5000/deleteproduct/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: token,
          },
        }
      );
      if (!response.ok) {
        navigate('/');
      }
      setIsDel(!isDel);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}
      >
        <button className="new-product-button">
          <Link to="/createproduct" style={{ textDecoration: 'none', color: 'black' }}>
            New Product
          </Link>
        </button>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Quantity</th>
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
              <td>{product.quantity}</td>
              <td>{product.categoryId}</td>
              <td>
                <img
                  src={`http://localhost:5000/${product.image}`}
                  alt="Product"
                  style={{ width: '50px', height: '50px' }}
                />
              </td>
              <td>
                <Link to={`/updateproduct/${product.id}`}>
                  <RiEdit2Line />
                </Link>
              </td>
              <td className="product-table">
                <RiDeleteBinLine onClick={() => deleteProduct(product.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/admin')}>Back</button>
    </div>
  );
}

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DeleteProduct.css'

export default function DeleteProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const submitDeleteProduct = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/deleteproduct/:id`, {
        method: 'DELETE',
        body: JSON.stringify({
          id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: token,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form
        className="delete-product-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitDeleteProduct(id);
        }}
      >
        <button className="delete-button">Delete</button>
        <button className="back-button" onClick={() => navigate('/products')}>
          Back
        </button>
      </form>
    </div>
  );
}

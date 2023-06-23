import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './EditProduct.css'

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});
  const [image, setImage] = useState(null);
  const [err, setErr] = useState('');

  const submitUpdateProducts = (id) => async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const formData = new FormData();
      formData.append('name', products.name);
      formData.append('img', image);

      const response = await fetch(`http://localhost:5000/updateproduct/${id}`, {
        method: 'PUT',
        body: formData,
        headers: {
          Authorization: token,
        },
      });
      if (!response.ok) {
        setErr('Not Found');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/allcategories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [id]);

  return (
    <div>
      {products && products.name !== undefined ? (
        <form
          className="edit-product-form"
          noValidate
          autoComplete="off"
        >
          <input
            type="text"
            id="name"
            required
            placeholder="Name"
            value={products?.name}
            onChange={(e) =>
              setProducts((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
          <input
            type="text"
            id="price"
            required
            placeholder="Price"
            value={products?.price}
            onChange={(e) =>
              setProducts((prevState) => ({
                ...prevState,
                price: e.target.value,
              }))
            }
          />
          <input
            type="text"
            id="description"
            required
            placeholder="description"
            value={products?.description}
            onChange={(e) =>
              setProducts((prevState) => ({
                ...prevState,
                type: e.target.value,
              }))
            }
          />
          <input
            type="text"
            id="quantity"
            required
            placeholder="Quantity"
            value={products?.quantity}
            onChange={(e) =>
              setProducts((prevState) => ({
                ...prevState,
                quantity: e.target.value,
              }))
            }
          />
        
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <select
            id="category"
            required
            value={products?.category_id}
            onChange={(e) =>
              setProducts((prevState) => ({
                ...prevState,
                category_id: e.target.value,
              }))
            }
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <button className="update-button" onClick={submitUpdateProducts(id)}>
            Update
          </button>
          <p className="error-message">{err ? err : null}</p>
          <button className="back-button" onClick={() => navigate('/products')}>
            Back
          </button>
        </form>
      ) : null}
    </div>
  );
}

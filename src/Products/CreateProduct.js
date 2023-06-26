
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateProduct.css'

export default function CreateProduct() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [image, setImage] = useState(null);
  const [err, setErr] = useState('');
  const[categories, setAllCategories] = useState([])

  const submitCreateProduct = async(e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('name', name);
    formData.append('categoryId', categoryId);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('quantity', quantity);
    formData.append('image', image);

    
    console.log(image)
    try {
      const response = await fetch('http://localhost:5000/createproduct', {
        method: 'POST',
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
    setName('');
    setPrice('');
    setDescription('');
    setQuantity('');
    setCategoryId('');
    setImage('');
  }
  
  useEffect(() => {
    fetch('http://localhost:5000/allcategories')
      .then((res) => res.json())
      .then((data) => setAllCategories(data));
  }, []);

  return (
    <div>
      <form className="create-product-form" onSubmit={submitCreateProduct}>
        <input
          type="text"
          id="name"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          id="price"
          required
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          id="description"
          required
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          id="quantity"
          required
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          
        <option value="">Select Category</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
         <input
          type="file"
          id="image"
          // accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit" style={{color:'black'}}>Create</button>
        {err && <p className="error-message">{err}</p>}
        <button onClick={() => navigate('/products')} style={{color:'black'}}>Back</button>
      </form>
    </div>
  );
}

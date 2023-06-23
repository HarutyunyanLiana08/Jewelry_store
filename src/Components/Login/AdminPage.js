import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import User from '../Component/User';
import './AdminPage.css';

export default function AdminPage() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <ul className="menu-list">
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <button className="logout-button" onClick={handleLogOut}>
          LogOut
        </button>
      </div>
      {/* <div className="content">
        <User />
      </div> */}
    </div>
  );
}




































// import React, { useState, useEffect } from 'react';
// import './AdminPage.css';
// import {useNavigate } from 'react-router-dom'
// import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus, AiOutlineLogout } from 'react-icons/ai';

// const AdminPage = () => {
//   const navigate = useNavigate()
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   // const [newProduct, setNewProduct] = useState({
//   //   name: '',
//   //   image: '',
//   //   price: '',
//   //   description: '',
//   //   quantity: '',
//   //   categoryId: '',
//   // });
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [newCategory, setNewCategory] = useState('');

//   useEffect(() => {
//     // Fetch products and categories from the server
//     fetchProducts();
//     fetchCategories();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       // Fetch products data from the server
//       // ...
//       const response = await fetch('http://localhost:5000/allproducts');
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data);
//       } else {
//         console.log('Error fetching products:', response.statusText);
//       }
//     } catch (error) {
//       console.log('Error fetching products:', error);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       // Fetch categories data from the server
//       // ...
//       const response = await fetch('http://localhost:5000/allcategories');
//       if (response.ok) {
//         const data = await response.json();
//         setCategories(data);
//       } else {
//         console.log('Error fetching categories:', response.statusText);
//       }
//     } catch (error) {
//       console.log('Error fetching categories:', error);
//     }
//   };
  
  
 
  
//   async function handleAddProduct (e) {
//     const[name, setName]=useState('')
//     const[image, setImage]=useState(null)
//     const[price, setPrice]=useState('')
//     const [description,setDescription]=useState('')
//     const [quantity, setQuantity] = useState('')
//     const [categoryId,setCategoryId] = useState('')
    
//     e.preventDefault()
//     const token = localStorage.getItem('token');
//     const formData = new FormData();
//         formData.append('name', name);
//         if (image) {
//         formData.append('img', image[0]);
//     }
//     try {
//       const response = await fetch('http://localhost:5000/createproduct', {
//         method: 'POST',
//         headers: {
//           "Authorization":token
//         },
//         body: formData
//       });
//       if (response.ok) {
//         // Product added successfully, fetch the updated products list
//         // fetchProducts();
        
//           setName(''),
//           setPrice (''),
//           setDescription (''),
//           setQuantity (''),
//           setImage(''),
//           setCategoryId ('')
//         ;
//       } else {
//         console.log('Error adding product:', response.statusText);
//       }
//     } catch (error) {
//       console.log('Error adding product:', error);
//     }
//   };

//   // const updateProduct = async () => {
//   //   try {
//   //     // Update product logic
//   //     // ...
//   //     const response = await fetch(`http://localhost:5000/updateproduct:id`, {
//   //       method: 'PUT',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(editingProduct),
//   //     });
//   //     if (response.ok) {
//   //       // Product updated successfully, fetch the updated products list
//   //       fetchProducts();
//   //       setEditingProduct(null);
//   //     } else {
//   //       console.log('Error updating product:', response.statusText);
//   //     }
//   //   } catch (error) {
//   //     console.log('Error updating product:', error);
//   //   }
//   // };

//   // const handleDeleteProduct = async (productId) => {
//   //   try {
//   //     // Delete product logic
//   //     // ...
//   //     const response = await fetch(`http://localhost:5000${productId}`, {
//   //       method: 'DELETE',
//   //     });
//   //     if (response.ok) {
//   //       // Product deleted successfully, fetch the updated products list
//   //       fetchProducts();
//   //     } else {
//   //       console.log('Error deleting product:', response.statusText);
//   //     }
//   //   } catch (error) {
//   //     console.log('Error deleting product:', error);
//   //   }
//   // };

//   // const handleAddCategory = async () => {
//   //   try {
//   //     // Add new category logic
//   //     // ...
//   //     const response = await fetch('/api/categories', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ name: newCategory }),
//   //     });
//   //     if (response.ok) {
//   //       // Category added successfully, fetch the updated categories list
//   //       fetchCategories();
//   //       setNewCategory('');
//   //     } else {
//   //       console.log('Error adding category:', response.statusText);
//   //     }
//   //   } catch (error) {
//   //     console.log('Error adding category:', error);
//   //   }
//   // };

//   // const handleDeleteCategory = async (categoryName) => {
//   //   try {
//   //     // Delete category logic
//   //     // ...
//   //     const response = await fetch(`/api/categories/${categoryName}`, {
//   //       method: 'DELETE',
//   //     });
//   //     if (response.ok) {
//   //       // Category deleted successfully, fetch the updated categories list
//   //       fetchCategories();
//   //     } else {
//   //       console.log('Error deleting category:', response.statusText);
//   //     }
//   //   } catch (error) {
//   //     console.log('Error deleting category:', error);
//   //   }
//   // };
//   const handleLogOut = () => {
//       localStorage.removeItem('token')
//         navigate('/')
    
//   };

//   return (
//     <div className="admin-dashboard">
//       <div className="product-management">
//         <h2 className="section-title">Product Management</h2>
//         <div className="product-list">
//           <h3 className="section-subtitle">Products</h3>
//           <ul className="list">
//             {products.map((product) => (
//               <li key={product.id} className="list-item">
//                 <span>{product.name}</span>
//                 {/* <button
//                   className="delete-button"
//                   onClick={() => handleDeleteProduct(product.id)}
//                 >
//                   <AiOutlineDelete />
//                 </button> */}
//                 {/* <button
//                   className="edit-button"
//                   onClick={() => updateProduct(product)}
//                 >
//                   <AiOutlineEdit />
//                 </button> */}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="product-form">
//           <h3 className="section-subtitle">Add Product</h3>
//           <input
//             type="text"
//             className="input"
//             placeholder="Product Name"
//             value={setProducts.name}
//             onChange={(e) =>
//               setProducts({ ...products, name: e.target.value })
//             }
//           />
//           <input
//             type="text"
//             className="input"
//             placeholder="Image URL"
//             value={products.image}
//             onChange={(e) =>
//               setProducts({ ...products, image: e.target.value })
//             }
//           />
//           <input
//             type="text"
//             className="input"
//             placeholder="Price"
//             value={products.price}
//             onChange={(e) =>
//               setProducts({ ...products, price: e.target.value })
//             }
//           />
//           <textarea
//             className="input"
//             placeholder="Description"
//             value={products.description}
//             onChange={(e) =>
//               setProducts({ ...products, description: e.target.value })
//             }
//           ></textarea>
//           <input
//             type="text"
//             className="input"
//             placeholder="Quantity"
//             value={products.quantity}
//             onChange={(e) =>
//               setProducts({ ...products, quantity: e.target.value })
//             }
//           />
//           <input
//             type="text"
//             className="input"
//             placeholder="Category ID"
//             value={products.categoryId}
//             onChange={(e) =>
//               setProducts({ ...products, categoryId: e.target.value })
//             }
//           />
//           <button className="action-button add-button" onClick={handleAddProduct}>
//             <AiOutlinePlus />
//             Add Product
//           </button>
//         </div>
//       </div>
//       <div className="category-management">
//         <h2 className="section-title">Category Management</h2>
//         <div className="category-list">
//           <h3 className="section-subtitle">Categories</h3>
//           <ul className="list">
//             {categories.map((category) => (
//               <li key={category.id} className="list-item">
//                 <span>{category.name}</span>
//                 {/* <button
//                   className="delete-button"
//                   onClick={() => handleDeleteCategory(category.name)}
//                 >
//                   <AiOutlineDelete />
//                 </button> */}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="category-form">
//           <h3 className="section-subtitle">Add Category</h3>
//           <input
//             type="text"
//             className="input"
//             placeholder="Category Name"
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//           />
//           {/* <button className="action-button add-button" onClick={handleAddCategory}>
//             <AiOutlinePlus />
//             Add Category
//           </button> */}
//         </div>
//       </div>
//       <button className="logout-button" onClick={handleLogOut}>
//         <AiOutlineLogout />
//         Logout
//       </button>
//     </div>
//   );
// };

// export default AdminPage;


// import React from 'react'
// import { Routes,Route } from 'react-router-dom'


// import Admin from '../Pages/AdminPage'

// import ProtectedRoute from './ProtectedRoute'
// import { decodeToken } from "react-jwt";




// export default function AppRoutes(){
//     const token =localStorage.getItem('token')
//     const decodedToken = decodeToken(token);
//     return(
//         <div>
//         <Routes>
//             <Route path='/' element={<Login/>} />
//             <Route path='/register' element={<Register />} />

//             <Route path='/categories' element={<ProtectedRoute><Category /></ProtectedRoute>} />
//             <Route path='/createcategory' element={<ProtectedRoute><CreateCategory /></ProtectedRoute>} />
//             <Route path="/deletecategory/:id" element={<ProtectedRoute><DeleteCategory /></ProtectedRoute>} />
//             <Route path="/updatecategory/:id" element={<ProtectedRoute><EditCategory /></ProtectedRoute>} />
//             <Route path='/undercategories' element={<ProtectedRoute><UnderCategory /></ProtectedRoute>} />
            
//             <Route path="/products" element={<ProtectedRoute><Product /></ProtectedRoute>} />
//             <Route path="/deleteproduct/:id" element={<ProtectedRoute><DeleteProduct /></ProtectedRoute>} />
//             <Route path='/createproduct' element={<ProtectedRoute><CreateProduct /></ProtectedRoute>} />
//             <Route path="/updateproduct/:id" element={<ProtectedRoute><EditProduct /></ProtectedRoute>} />
//             <Route path='/admin' element={<ProtectedRoute><Admin /></ProtectedRoute>} />
//             </Route>
//         </Routes>
//         </div>
//     )
// }
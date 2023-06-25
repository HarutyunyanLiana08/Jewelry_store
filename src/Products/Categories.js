import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isDel, setIsDel] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allcategories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
      });
  }, [isDel]);

  const deleteCategory = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/deletecategory/${id}`, {
        method: "DELETE",
        body: JSON.stringify({
          id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: token,
        },
      });
      setIsDel(!isDel);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "15px" }}>All Categories</h2>
      <div
        style={{ width: "50%", margin: "50px auto" }}
      >
        <div style={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
          <button
            style={{
              backgroundColor: "#DADADA",
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
              textDecoration:"none"
            }}
          >
            <Link to="/createcategory">New Category</Link>
          </button>
        </div>
        <table style={{ minWidth: 650 }} aria-label="simple table">
          <thead>
            <tr style={{ backgroundColor: "#13A2B7", color: "#fff" }}>
              <th align="center">ID</th>
              <th align="center">Name</th>
              <th align="center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td align="center">{category.id}</td>
                <td align="center">{category.name}</td>
                <td align="center">
                         <span
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteCategory(category.id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Categories;

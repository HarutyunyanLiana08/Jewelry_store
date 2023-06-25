import { useState } from "react";
import { useNavigate } from "react-router-dom"

function CreateCategory() {
  const [name, setName] = useState("");
  const [created, setCreated] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function createCategory(e) {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (name.trim() === "") {
      setErr("Add Category Name");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/createcategory", {
        method: "POST",
        body: JSON.stringify({
          name,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: token,
        },
      });
      setErr("");
      setCreated("Category Created");
      if (!response.ok) {
        setCreated("");
        setErr("Not Found");
      } else {
        setCreated("");
        setErr("");
        navigate("/categories");
      }
    } catch (err) {
      console.log(err);
    }
    setName("");
  }

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center", marginTop: "15px" }}>Create Category</h2>
      <p style={{ height: "10px", textAlign: "center", fontSize: "15px" }}>
        {created ? created : ""}
      </p>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ margin: "8px", width: "41ch", padding: "8px" }}
      />
      <p style={{ color: "red", height: "10px", textAlign: "center", fontSize: "15px" }}>
        {err ? err : ""}
      </p>
      <button
        onClick={createCategory}
        style={{
          margin: "8px",
          padding: "8px 16px",
          border: "1px solid #ccc",
          backgroundColor: "black",
          cursor: "pointer",
        }}
      >
        Create
      </button>
    </div>
  );
}

export default CreateCategory;

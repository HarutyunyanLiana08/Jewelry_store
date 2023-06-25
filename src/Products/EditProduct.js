import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditProduct() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({});
  const [image, setImage] = useState([]);
  const [updated, setUpdated] = useState("");
  const [err, setErr] = useState("");
  const [emptyErr, setEmptyErr] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
  }, [id]);

  useEffect(() => {
    fetch("http://localhost:5000/allcategories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
      });
  }, []);

  const updateProduct = async (id) => {
    const token = localStorage.getItem('token');
    if (
      product.name === "" ||
      product.categoryId === "" ||
      product.price === "" ||
      product.description === "" ||
      product.quantity === ""
    ) {
      setEmptyErr("Fill all fields");
      return;
    }
    const formData = new FormData();
    formData.append("name", product?.name);
    formData.append("price", product?.price);
    formData.append("description", product?.description);
    formData.append("quantity", product?.quantity);
    formData.append("categoryId", product?.categoryId);
    formData.append("image", image);
    
    try {
      const response = await fetch(
        `http://localhost:5000/updateproduct/${id}`,
        {
          method: "PUT",
          body: formData,
          headers: {
            Authorization: token,
          },
        }
      );
      if (!response.ok) {
        setUpdated("");
        setErr("Not Found");
      } else {
        setEmptyErr("");
        setUpdated("Product Updated");
        navigate("/products");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "15px" }}>Edit Product</h2>
      <p style={{ height: "10px", textAlign: "center", fontSize: "15px" }}>
        {err ? err : updated}
      </p>
      {product.name !== undefined ? (
        <form
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            value={product.name}
            onChange={(e) =>
              setProduct((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            style={{ margin: "8px", width: "41ch", padding: "8px" }}
          />

          <input
            type="file"
            id="image"
            multiple
            onChange={(e) => setImage(e.target.files[0])}
            style={{ margin: "8px", padding: "8px", width: "41ch" }}
          />

          <select
            value={product.categoryId}
            onChange={(e) =>
              setProduct((prevState) => ({
                ...prevState,
                categoryId: e.target.value,
              }))
            }
            style={{ margin: "8px", padding: "8px", width: "41ch" }}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Price"
            value={product.price}
            onChange={(e) =>
              setProduct((prevState) => ({
                ...prevState,
                price: e.target.value,
              }))
            }
            style={{ margin: "8px", width: "41ch", padding: "8px" }}
          />

          <input
            type="text"
            placeholder="Description"
            value={product.description}
            onChange={(e) =>
              setProduct((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
            style={{ margin: "8px", width: "41ch", padding: "8px" }}
          />

          <input
            type="text"
            placeholder="Quantity"
            value={product.quantity}
            onChange={(e) =>
              setProduct((prevState) => ({
                ...prevState,
                quantity: e.target.value,
              }))
            }
            style={{ margin: "8px", width: "41ch", padding: "8px" }}
          />

          <p style={{ color: "red", height: "10px", textAlign: "center", fontSize: "15px" }}>
            {emptyErr ? emptyErr : ""}
          </p>

          <button
            onClick={() => updateProduct(id)}
            style={{
              margin: "8px",
              padding: "8px 16px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              cursor: "pointer",
              color: "black"
            }}
          >
            Update
          </button>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EditProduct;

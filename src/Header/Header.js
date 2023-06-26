import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './Images/logo.jpg'
import basket from './Images/basket.png';

function Header({ count }) {
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allcategories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
      });
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="App-header">
      <div className="navBar">
        <div className="navBarLeft">
          <div className="navBarLeftLogo">
            <img src={logo} className="brandLogo" alt="Logo" />
          </div>
          <div className="navBarLeftItems">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/" className="link" onClick={toggleDropdown}>
              Shop
              {showDropdown && (
                <ul className="dropdown-menu">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link to={`/shop/${category.id}`} className="dropdown-item">
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </Link>
            <Link to="/about" className="link">
              About
            </Link>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </div>
        </div>
        <div className="navBarRight">
          <div className="navBarRightAccount">
            <Link to="/login" className="button button-white">
              <button>Sign in</button>
            </Link>
            <Link to="/register" className="button button-black">
              <button>Sign up</button>
            </Link>
          </div>
          <div className="navBarRightBasket">
            <Link to="/basket">
              <img src={basket} className="basketImage" alt="basket" />
            </Link>
            <div className="basketProductsQuantity">
              <span>{count}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="image"></div>
    </header>
  );
}

export default Header;

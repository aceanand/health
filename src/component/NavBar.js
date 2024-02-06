import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <span>& Healthh</span>
      </div>
      <Link to="/">Home</Link>

      <Link to="/product">Product</Link>

      <Link to="/faq">FAQ</Link>

      <Link to="/about">About Us</Link>

      <Link to="/blog">Blog</Link>

      <Link to="/Explore" className="explore">
        Explore
      </Link>
    </div>
  );
}
export default NavBar;

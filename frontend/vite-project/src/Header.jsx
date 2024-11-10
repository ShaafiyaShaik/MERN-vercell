import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Pawsitive Pet Care</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#page1">Home</a></li>
          <li><a href="#page2">Services</a></li>
          <li><a href="#about2">About Us</a></li>
          <li><a href="#page4">Registration</a></li>
          <li><a href="#page5">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

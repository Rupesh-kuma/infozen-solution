import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
            <div className="topbar">
    <div className="container-fluid">
      <div className="row align-items-center">
         {/* Left Side */}
        <div className="col-md-6 d-flex flex-wrap">
          <Link to="tel:+919661911152"><i className="fa fa-phone"></i>+91-9661911152</Link>
          <Link to="#"><i className="fa fa-location-dot"></i>27 Division St, New York, NY 10002</Link>
          <Link to="mailto:rupesh.kumar.light@gmail.com"><i className="fa fa-envelope"></i>rupesh.kumar.light@gmail.com</Link>
        </div>

         {/* Right Side  */}
        <div className="col-md-6 text-md-end mt-2 mt-md-0">
          <Link to="/careers">Careers</Link>
          <Link to="/news-media">News & Media</Link>
          <Link to="/faq">FAQ</Link>
          <span className="social-icons ms-3">
            <Link to="#"><i className="fab fa-twitter"></i></Link>
            <Link to="#"><i className="fab fa-facebook"></i></Link>
            <Link to="#"><i className="fab fa-linkedin"></i></Link>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
          </span>
        </div>
      </div>
    </div>
  </div>

        <nav className="navbar navbar-expand-lg navbar-custom">
  <div className="container-fluid">
    {/* Logo */}
    <a className="navbar-brand text-white fw-bold logo_main" href="#">
      <img
        src="infozen_solution.png"
        alt="logo"
      />
    </a>
    {/* Navbar Links */}
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">
            Service
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
      {/* Search */}
      <form className="d-flex me-3" role="search">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      {/* Notification Icon */}
      <button className="icon-btn">
        <i className="bi bi-bell" />
      </button>
      {/* Profile Image */}
      <img
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="profile"
        className="profile-img"
      />
    </div>
  </div>
</nav>

        </>
    )
}
export default Navbar;
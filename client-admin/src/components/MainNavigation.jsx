import { Link, useNavigate } from "react-router-dom";

function MainNavigation() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <header>
        {/* <!-- Sidebar --> */}
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <Link
                to="/"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Main dashboard</span>
              </Link>
              <Link
                to="/register"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-lock fa-fw me-3"></i>
                <span>Register Admin</span>
              </Link>
              <Link
                to="/category"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-chart-bar fa-fw me-3"></i>
                <span>Categories</span>
              </Link>
              <a
                onClick={handleLogout}
                href=""
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-globe fa-fw me-3"></i>
                <span>Sign Out</span>
              </a>
            </div>
          </div>
        </nav>
        {/* <!-- Sidebar --> */}

        {/* <!-- Navbar --> */}
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Toggle button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Brand --> */}
            <a className="navbar-brand nav-link">
              <strong>Gamma-Mart</strong>
            </a>
            {/* <!-- Search form --> */}
            <form className="d-none d-md-flex input-group w-auto my-auto">
              <input
                autoComplete="off"
                type="search"
                className="form-control rounded"
                placeholder="Find Product"
                style={{ minWidth: " 225px" }}
              />
              <span className="input-group-text border-0">
                <i className="fas fa-search"></i>
              </span>
            </form>

            {/* <!-- Right links --> */}
            <ul className="navbar-nav ms-auto d-flex flex-row">
              {/* <!-- Icon --> */}
              <li className="nav-item">
                <a className="navbar-brand nav-link">
                  <h5>Welcome ...</h5>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
      </header>
    </>
  );
}

export default MainNavigation;

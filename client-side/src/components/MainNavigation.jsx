function MainNavigation() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
        {/* <!-- Container wrapper --> */}
        <div className="container">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent1"
          >
            {/* <!-- Navbar brand --> */}
            <a
              className="navbar-brand mt-2 mt-sm-0"
              href="https://mdbootstrap.com/"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="20"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link " href="https://mdbootstrap.com/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://mdbootstrap.com/docs/standard/"
                >
                  About MDB
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://mdbootstrap.com/docs/standard/getting-started/installation/"
                >
                  Free download
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://mdbootstrap.com/education/bootstrap/"
                >
                  Free tutorials
                </a>
              </li>
            </ul>
            {/* <!-- Left links -->       */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            <a className="nav-link me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </a>

            <a className="nav-link me-3" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="nav-link me-3" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/mdbootstrap/bootstrap-material-design"
              className="border rounded px-2 nav-link"
            >
              <i className="fab fa-github me-2"></i>MDB GitHub
            </a>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
}

export default MainNavigation;

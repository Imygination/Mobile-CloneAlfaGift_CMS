function MainNavigation() {
  return (
    <>
      <header>
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

export default MainNavigation

// import MainNavigation from "../components/MainNavigation"
import ItemCard from "../components/ItemCard";
import useFetch from "../hooks/useFetch";
import "./HomePage.css";

function HomePage() {
  let { data: items, isLoading: loadingItems } = useFetch("customer/item");
  console.log(items, "<<<<<<<<<<<<<< items di Home");

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
                src="https://static-content.alfagift.id/static/logo-alfagift.png"
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

      {/* <!-- carousel --> */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://alfagift.id/_ipx/q_70/https://cdn.takdes.net/media/bo/product/ama/banner/pm_banner_231102_hPNi.png"
              className="d-block w-100"
              alt="Wild Landscape"
            />
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
            <div className="carousel-caption d-none d-sm-block mb-5">
              <h1 className="mb-4">
                <strong>Learn Bootstrap 5 with MDB</strong>
              </h1>

              <p>
                <strong>Best & free guide of responsive web design</strong>
              </p>

              <p className="mb-4 d-none d-md-block">
                <strong>
                  The most comprehensive tutorial for the Bootstrap 5. Loved by
                  over 3 000 000 users. Video and written versions available.
                  Create your own, stunning website.
                </strong>
              </p>

              <a
                href="https://mdbootstrap.com/education/bootstrap/"
                className="btn btn-outline-white btn-lg"
              >
                Start free tutorial
                <i className="fas fa-graduation-cap ms-2"></i>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://alfagift.id/_ipx/q_70/https://cdn.takdes.net/media/bo/product/ama/banner/pm_banner_230613_JEIg.jpg"
              className="d-block w-100"
              alt="Camera"
            />
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
            <div className="carousel-caption d-none d-md-block mb-5">
              <h1 className="mb-4">
                <strong>Learn Bootstrap 5 with MDB</strong>
              </h1>

              <p>
                <strong>Best & free guide of responsive web design</strong>
              </p>

              <p className="mb-4 d-none d-md-block">
                <strong>
                  The most comprehensive tutorial for the Bootstrap 5. Loved by
                  over 3 000 000 users. Video and written versions available.
                  Create your own, stunning website.
                </strong>
              </p>

              <a
                href="https://mdbootstrap.com/education/bootstrap/"
                className="btn btn-outline-white btn-lg"
              >
                Start free tutorial
                <i className="fas fa-graduation-cap ms-2"></i>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://alfagift.id/_ipx/q_70/https://cdn.takdes.net/media/bo/product/ama/banner/pm_banner_231104_M0bN.png"
              className="d-block w-100"
              alt="Exotic Fruits"
            />
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
            <div className="carousel-caption d-none d-md-block mb-5">
              <h1 className="mb-4">
                <strong>Learn Bootstrap 5 with MDB</strong>
              </h1>

              <p>
                <strong>Best & free guide of responsive web design</strong>
              </p>

              <p className="mb-4 d-none d-md-block">
                <strong>
                  The most comprehensive tutorial for the Bootstrap 5. Loved by
                  over 3 000 000 users. Video and written versions available.
                  Create your own, stunning website.
                </strong>
              </p>

              <a
                href="https://mdbootstrap.com/education/bootstrap/"
                className="btn btn-outline-white btn-lg"
              >
                Start free tutorial
                <i className="fas fa-graduation-cap ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <!--Main layout--> */}
      <main>
        <div className="container">
          {/* <!-- Navbar --> */}
          <nav
            className="navbar navbar-expand-lg navbar-dark mt-3 mb-5 shadow p-2"
            style={{ backgroundColor: "#e61717" }}
          >
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid">
              {/* <!-- Navbar brand --> */}
              <a className="navbar-brand" href="#">
                Categories:
              </a>

              {/* <!-- Toggle button --> */}
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent2"
                aria-controls="navbarSupportedContent2"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>

              {/* <!-- Collapsible wrapper --> */}
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent2"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <!-- Link --> */}
                  <li className="nav-item acitve">
                    <a className="nav-link text-white" href="#">
                      All
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Shirts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Sport wears
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Outwears
                    </a>
                  </li>
                </ul>

                {/* <!-- Search --> */}
                <form className="w-auto py-1" style={{ maxWidth: "12rem" }}>
                  <input
                    type="search"
                    className="form-control rounded-0"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>
            {/* <!-- Container wrapper --> */}
          </nav>
          {/* <!-- Navbar --> */}

          {/* <!-- Products --> */}
          <section>
            <div className="text-center">
              <div className="row">
                {loadingItems ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  items.map((item) => {
                    return <ItemCard item={item} key={item.id} />;
                  })
                )}
                {/* <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        className="w-100"
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-dark ms-2">NEW</span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-2">Denim shirt</h5>
                      </a>
                      <a href="" className="text-reset ">
                        <p>Shirt</p>
                      </a>
                      <h6 className="mb-3 price">120$</h6>
                    </div>
                  </div>
                </div> */}

                {/* <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                        className="w-100"
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-primary ms-2">
                                bestseller
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-2">Sweatshirt</h5>
                      </a>
                      <a href="" className="text-reset ">
                        <p>Sport wear</p>
                      </a>
                      <h6 className="mb-3 price">139$</h6>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
                        className="w-100"
                      />
                      <a href="#!">
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-2">Grey blouse</h5>
                      </a>
                      <a href="" className="text-reset ">
                        <p>Sport wear</p>
                      </a>
                      <h6 className="mb-3 price">99$</h6>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
                        className="w-100"
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge sale-badge ms-2">
                                -10%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-2">Black jacket</h5>
                      </a>
                      <a href="" className="text-reset ">
                        <p>Outwear</p>
                      </a>
                      <h6 className="mb-3 price">
                        <s>199$</s>
                        <strong className="ms-2 sale">179$</strong>
                      </h6>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                        className="w-100"
                      />
                      <a href="#!">
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                          ></div>
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-2">Sweatshirt</h5>
                      </a>
                      <a href="" className="text-reset ">
                        <p>Sport wear</p>
                      </a>
                      <h6 className="mb-3 price">139$</h6>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
                        className="w-100"
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-success ms-2">Eco</span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                          ></div>
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-2">Grey blouse</h5>
                      </a>
                      <a href="" className="text-reset ">
                        <p>Sport wear</p>
                      </a>
                      <h6 className="mb-3 price">99$</h6>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
                        className="w-100"
                      />
                      <a href="#!">
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                          ></div>
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-2">Black jacket</h5>
                      </a>
                      <a href="" className="text-reset">
                        <p>Outwear</p>
                      </a>
                      <h6 className="mb-3 price">199$</h6>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        className="w-100"
                      />
                      <a href="#!">
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}
                          ></div>
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-2">Denim shirt</h5>
                      </a>
                      <a href="" className="text-reset ">
                        <p>Shirt</p>
                      </a>
                      <h6 className="mb-3 price">120$</h6>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </section>

          {/* <!-- Pagination --> */}
          <nav
            aria-label="Page navigation example"
            className="d-flex justify-content-center mt-3"
          >
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- Pagination -->   */}
        </div>
      </main>
      {/* <!--Main layout--> */}

      <footer
        className="text-center text-white mt-4"
        style={{ backgroundColor: "#607D8B" }}
      >
        {/* <!--Call to action--> */}
        <div className="pt-4 pb-2">
          <a
            className="btn btn-outline-white footer-cta mx-2"
            href="https://mdbootstrap.com/docs/jquery/getting-started/download/"
            role="button"
          >
            Download MDB
            <i className="fas fa-download ms-2"></i>
          </a>
          <a
            className="btn btn-outline-white footer-cta mx-2"
            href="https://mdbootstrap.com/education/bootstrap/"
            role="button"
          >
            Start free tutorial
            <i className="fas fa-graduation-cap ms-2"></i>
          </a>
        </div>
        {/* <!--/.Call to action--> */}

        <hr className="text-dark" />

        <div className="container">
          {/* <!-- Section: Social media --> */}
          <section className="mb-3">
            {/* <!-- Facebook --> */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* <!-- YouTube --> */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-youtube"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{
            backgroundColor: " rgba(0, 0, 0, 0.2)",
            textColor: "#E0E0E0",
          }}
        >
          © 2022 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
}

export default HomePage;

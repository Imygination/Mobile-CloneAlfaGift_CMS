import { useState } from "react";

function LoginPage() {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    const field = e.target.name;
    setLoginInput({
      ...loginInput,
      [field]: value,
    });
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-light text-dark"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 border border-dark rounded">
                  <div className="mb-md-5 mt-md-4 pb-2">
                    <h2 className="fw-bold mb-2 text-uppercase text-center">
                      Login
                    </h2>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        console.log(e);
                        console.log(loginInput.email, loginInput.password);
                      }}
                    >
                      {/* <!-- Email input --> */}
                      <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                      <div className="form-outline mb-1">
                        <input
                          type="email"
                          id="form2Example1"
                          className="form-control border border-dark rounded"
                          name="email"
                          value={loginInput.email}
                          onChange={inputHandler}
                        />
                      </div>

                      {/* <!-- Password input --> */}
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example2"
                          className="form-control border border-dark rounded"
                          name="password"
                          value={loginInput.password}
                          onChange={inputHandler}
                        />
                      </div>
                      {/* <!-- Submit button --> */}
                      <button
                        type="submit"
                        className="btn btn-danger btn-block mb-1"
                      >
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;

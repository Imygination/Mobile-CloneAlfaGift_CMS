import { useDispatch } from "react-redux";
import MainNavigation from "../components/MainNavigation";
import { useState } from "react";
import { addUser } from "../store/actions/actionCreator";
import Swal from "sweetalert2";

function RegisterPage() {
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "Admin",
    phoneNumber: "",
    address: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    setDataUser({
      ...dataUser,
      [field]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(addUser(dataUser));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Success Register ${dataUser.username}`,
        showConfirmButton: false,
        timer: 1500
      })
      console.log(response, "<<<<<<<<<<< DARI SERVER ADD");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message[0],
      })
    }
  };
  return (
    <>
      <MainNavigation />

      <main
        style={{ marginTop: "58px", marginLeft: "20px", marginRight: "20px" }}
      >
        <div className="container pt-4"></div>
        <h3 className="text-center pb-4">Register</h3>
        <form onSubmit={submitHandler}>
          {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
          <div className="row mb-4">
            <div className="col">
              <label className="form-label" htmlFor="form6Example1">
                Username
              </label>
              <div className="form-outline">
                <input
                  type="text"
                  id="form6Example1"
                  className="form-control border border-dark rounded"
                  name="username"
                  value={dataUser.username}
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>

          {/* <!-- Email input --> */}
          <label className="form-label" htmlFor="form6Example5">
            Email
          </label>
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form6Example5"
              className="form-control border border-dark rounded"
              name="email"
              value={dataUser.email}
              onChange={inputHandler}
            />
          </div>

          {/* <!-- Text input --> */}
          <label className="form-label" htmlFor="form6Example3">
            Password
          </label>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form6Example3"
              className="form-control border border-dark rounded"
              name="password"
              value={dataUser.password}
              onChange={inputHandler}
            />
          </div>

          {/* <!-- Number input --> */}
          <label className="form-label" htmlFor="form6Example6">
            Phone
          </label>
          <div className="form-outline mb-4">
            <input
              type="number"
              id="form6Example6"
              className="form-control border border-dark rounded"
              name="phoneNumber"
              value={dataUser.phoneNumber}
              onChange={inputHandler}
            />
          </div>

          {/* <!-- Message input --> */}
          <label className="form-label" htmlFor="form6Example7">
            Adress
          </label>
          <div className="form-outline mb-4">
            <textarea
              className="form-control border border-dark rounded"
              id="form6Example7"
              rows="4"
              name="address"
              value={dataUser.address}
              onChange={inputHandler}
            ></textarea>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default RegisterPage;

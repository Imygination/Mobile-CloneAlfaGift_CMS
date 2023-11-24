import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory, fetchData } from "../store/actions/actionCreator";
import Swal from "sweetalert2";

function AddCategory() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    name: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    setCategory({
      ...category,
      [field]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(category.name);
    try {
      const response = await dispatch(addCategory(category));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Success Add ${response.name}`,
        showConfirmButton: false,
        timer: 1500
      })
      dispatch(fetchData("user/category"));
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
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div className="row mb-4">
                  <div className="col">
                    <label className="form-label" htmlFor="form6Example1">
                      Name
                    </label>
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form6Example1"
                        className="form-control border border-dark rounded"
                        name="name"
                        value={category.name}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-mdb-dismiss="modal"
                  >
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCategory;

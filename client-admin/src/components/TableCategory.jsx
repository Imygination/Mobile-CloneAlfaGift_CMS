import { useDispatch } from "react-redux";
import {
  deleteCategory,
  fetchCategoryId,
  fetchData,
} from "../store/actions/actionCreator";
import Swal from "sweetalert2";
import { useState } from "react";

/* eslint-disable react/prop-types */
function TableCategory({ category, index }) {
  const dispatch = useDispatch();
  // const data = useSelector((state) => {
  //   return state;
  // });

  const [dataCategory, setCategory] = useState({
    name: "",
  });
  console.log(dataCategory.name, "<<<<<<<<<<<<<<<< INI NIHH 2");

  const inputHandler = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    setCategory({
      ...dataCategory,
      [field]: value,
    });
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(deleteCategory(category.id));
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Success Delete ${response.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(fetchData("user/category"));
    } catch (error) {
      console.log(error);
    }
  };

  let result = "";
  const editHandler = async () => {
    result = await dispatch(fetchCategoryId(category.id));
    await setCategory({ name: result });
    console.log(dataCategory.name, "<<<<<<<<<<<<<<<< INI NIHH");
    console.log(result, "<<<<<<<<<<<<<<<< bismillah");
  };

  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <div className="ms-3">
              <p className="fw-bold mb-1">{index + 1}</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">{category.name}</p>
        </td>
        <td>
          <p className="fw-normal mb-1">{category.createdAt}</p>
        </td>
        <td>{category.updatedAt}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger btn-sm btn-rounded"
            onClick={deleteHandler}
          >
            delete
          </button>
          <button
            type="button"
            className="btn btn-warning btn-sm btn-rounded ms-2"
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal2"
            onClick={editHandler}
          >
            edit
          </button>
          {/* <EditCategory category={result.payload} /> */}
          <div
            className="modal fade"
            id="exampleModal2"
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
                  <form>
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
                            value={dataCategory.name}
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
        </td>
      </tr>
    </>
  );
}

export default TableCategory;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, fetchData } from "../store/actions/actionCreator";
import Swal from "sweetalert2";
import useFetch from "../hooks/useFetch";

function AddItem() {
  useFetch("user/category");
  const dispatch = useDispatch();
  const categories = useSelector((state) => {
    return state.categoryReducer.categories;
  });
  console.log(categories, "<<<<<<<<<<<<<<<<<<<<<<< TAHH");
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: 0,
    imgUrl: "",
    authorId: localStorage.id,
    categoryId: 1,
    ingredientName1: "",
    ingredientName2: "",
    ingredientName3: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    console.log(field, value);
    setNewItem({
      ...newItem,
      [field]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(addItem(newItem));
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Success Register ${newItem.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(fetchData("user/item"));
      console.log(response, "<<<<<<<<<<< DARI SERVER ADD");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message[0],
      });
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
                Add Item
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
                        value={newItem.name}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <label className="form-label" htmlFor="form6Example2">
                      Category
                    </label>
                    <div className="form-outline">
                      <select
                        name="categoryId"
                        id="form6Example2"
                        className="form-control border border-dark rounded"
                        value={newItem.categoryId}
                        onChange={inputHandler}
                      >
                        {categories.map((category) => {
                          return (
                            <option
                              className="form-control border border-dark rounded"
                              value={category.id}
                              key={category.id}
                              selected
                            >
                              {category.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>

                {/* <!-- Text input --> */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form6Example4">
                    Price
                  </label>
                  <input
                    type="number"
                    id="form6Example4"
                    className="form-control border border-dark rounded"
                    name="price"
                    value={newItem.price}
                    onChange={inputHandler}
                  />
                </div>

                {/* <!-- Email input --> */}
                <label className="form-label" htmlFor="form6Example5">
                  image URL
                </label>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example5"
                    className="form-control border border-dark rounded"
                    name="imgUrl"
                    value={newItem.imgUrl}
                    onChange={inputHandler}
                  />
                </div>

                {/* <!-- Message input --> */}
                <label className="form-label" htmlFor="form6Example7">
                  Description
                </label>
                <div className="form-outline mb-4">
                  <textarea
                    className="form-control border border-dark rounded"
                    id="form6Example7"
                    rows="4"
                    name="description"
                    value={newItem.description}
                    onChange={inputHandler}
                  ></textarea>
                </div>

                <label className="form-label" htmlFor="form6Example5">
                  Ingredients
                </label>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example5"
                    className="form-control border border-dark rounded"
                    name="ingredientName1"
                    value={newItem.ingredientName1}
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example5"
                    className="form-control border border-dark rounded"
                    name="ingredientName2"
                    value={newItem.ingredientName2}
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example5"
                    className="form-control border border-dark rounded"
                    name="ingredientName3"
                    value={newItem.ingredientName3}
                    onChange={inputHandler}
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
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

export default AddItem;

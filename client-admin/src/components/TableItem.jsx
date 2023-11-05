import Swal from "sweetalert2";
import AddItem from "./AddItem";
import { useDispatch } from "react-redux";
import { deleteItem, fetchData } from "../store/actions/actionCreator";

/* eslint-disable react/prop-types */
function TableItem({ item }) {
  const dispatch = useDispatch();
  const deleteHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(deleteItem(item.id));
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Success Delete ${response.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(fetchData("user/item"));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={item.imgUrl}
              alt=""
              style={{ width: "100px", height: "100px" }}
              className="rounded"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{item.name}</p>
              <p className="text-muted mb-0">Category: {item.Category.name}</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">{item.price}</p>
        </td>
        <td>
          <p className="fw-normal mb-1">Author: {item.User.username}</p>
        </td>
        <td>
          <p className="fw-normal mb-1">
            Ingredients:
            {item.Ingredients ? item.Ingredients.map(ingredient => {
              return ingredient.name + ', '
            }) : "No Ingredients"}
          </p>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-warning btn-sm btn-rounded ms-2"
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
          >
            Edit
          </button>
          <AddItem />
          <button
            type="button"
            className="btn btn-danger btn-sm btn-rounded ms-2"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default TableItem;

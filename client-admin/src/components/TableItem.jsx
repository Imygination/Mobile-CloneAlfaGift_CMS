import AddItem from "./AddItem";

/* eslint-disable react/prop-types */
function TableItem({ item }) {
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
              <p className="text-muted mb-0">Category: {item.categoryId}</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">{item.price}</p>
        </td>
        <td>
          <p className="fw-normal mb-1">Author: {item.authorId}</p>
        </td>
        <td>need relation</td>
        <td>
          <button
            type="button"
            className="btn btn-link btn-sm btn-rounded"
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
          >
            Edit
          </button>
          <AddItem />
          <button
            type="button"
            className="btn btn-link btn-sm btn-rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default TableItem;

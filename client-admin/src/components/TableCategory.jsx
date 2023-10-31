
/* eslint-disable react/prop-types */
function TableCategory({ category, index }) {
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
          <p className="fw-normal mb-1">CreatedAt</p>
        </td>
        <td>UpdatedAt</td>
        <td>
          <button
            type="button"
            className="btn btn-link btn-sm btn-rounded"
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default TableCategory;

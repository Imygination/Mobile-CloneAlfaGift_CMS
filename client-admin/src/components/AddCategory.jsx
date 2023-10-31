function AddCategory() {
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
              <form>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form6Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form6Example1">
                        Name
                      </label>
                    </div>
                  </div>
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

function AddItem() {
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
                Modal title
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
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form6Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form6Example2">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>

                {/* <!-- Text input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example3"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form6Example3">
                    Company name
                  </label>
                </div>

                {/* <!-- Text input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form6Example4"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form6Example4">
                    Address
                  </label>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form6Example5"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form6Example5">
                    Email
                  </label>
                </div>

                {/* <!-- Number input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="number"
                    id="form6Example6"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form6Example6">
                    Phone
                  </label>
                </div>

                {/* <!-- Message input --> */}
                <div className="form-outline mb-4">
                  <textarea
                    className="form-control"
                    id="form6Example7"
                    rows="4"
                  ></textarea>
                  <label className="form-label" htmlFor="form6Example7">
                    Additional information
                  </label>
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

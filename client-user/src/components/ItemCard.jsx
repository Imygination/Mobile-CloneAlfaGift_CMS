
/* eslint-disable react/prop-types */
function ItemCard({ item }) {
  return (
    <>
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card">
          <div
            className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light"
          >
            <img
              src={item.imgUrl}
              className="w-100"
            />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-dark ms-2">NEW</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{
                    backgroundColor: "rgba(251, 251, 251, 0.15)",
                  }}
                ></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-2">{item.name}</h5>
            </a>
            <a href="" className="text-reset ">
              <p>{item.Category.name}</p>
            </a>
            <h6 className="mb-3 price">RP. {item.price}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;

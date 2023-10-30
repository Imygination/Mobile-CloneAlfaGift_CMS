import AddItem from "../components/AddItem";
import MainNavigation from "../components/MainNavigation";
import TableItem from "../components/TableItem";

function CategoryPage() {
  return (
    <>
      <MainNavigation />
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4"></div>
        <button
          type="button"
          className="btn btn-primary btn-sm d-flex flex-row ms-auto me-3"
          data-mdb-toggle="modal"
          data-mdb-target="#exampleModal"
        >
          + Add Item
        </button>
        <AddItem />
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Author</th>
              <th>Ingredients</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <TableItem />
          </tbody>
        </table>
      </main>
    </>
  );
}

export default CategoryPage;

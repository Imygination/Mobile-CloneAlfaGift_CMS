import AddCategory from "../components/AddCategory";
import MainNavigation from "../components/MainNavigation";
import TableCategory from "../components/TableCategory";
import useFetch from "../hooks/useFetch";

function CategoryPage() {
  const { data: categories, isLoading: loadingCategories } = useFetch("category");
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
          + Add Category
        </button>
        <AddCategory />
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Created</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {loadingCategories ? (
              <tr><td>LOADING...</td></tr>
            ) : (
              categories.map((category, index) => {
                return <TableCategory category={category} index={index} key={category.id} />;
              })
            )}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default CategoryPage;

import Main from "../components/ui/Main.jsx";
import AddWeight from "../components/Dashboard/AddWeight.jsx";

function AddWeightPage() {
  return (
    <Main variant="dashboard">
      <section className="dashboard-form-page">
        <AddWeight />
      </section>
    </Main>
  );
}

export default AddWeightPage;
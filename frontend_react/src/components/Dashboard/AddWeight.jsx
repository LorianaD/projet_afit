import { useNavigate } from "react-router";
import useAddWeight from "../../hooks/useAddWeight";
import FormLayout from "../ui/form/FormLayout";
import FormField from "../ui/form/FormField";
import SubmitButton from "../ui/form/SubmitButton";

function AddWeight() {
  const navigate = useNavigate();

  const { formData, error, message, handleChange, submitWeight } = useAddWeight();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await submitWeight();

    if (result.success) {
      navigate("/dashboard");
    }
  };

  return (
    <FormLayout
        title="Insère ton nouveau poids"
        submit={handleSubmit}
        error={error}
        message={message}
    >
        <FormField
            label="Poids actuel"
            type="number"
            name="weight"
            id="weight"
            placeholder="ex. 65"
            value={formData.weight}
            onChange={handleChange}
        />

        <SubmitButton value="Valider" cancel="Annuler"/>
    </FormLayout>
  );
}

export default AddWeight;
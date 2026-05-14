import { Link, useNavigate } from "react-router"
import FormLayout from "../ui/form/FormLayout";
import FormField from "../ui/form/FormField";
import SubmitButton from "../ui/form/SubmitButton";
import useLogin from "../../hooks/useLogin";


function Login() {

const navigate = useNavigate();

  const { formData, error, message, handleChange, submitLogin } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await submitLogin();
    console.log("Résultat dans Login.jsx :", result);

    if (result.success) {
      console.log("Redirection dashboard");
      navigate("/dashboard");
    }
  };

  return (
    <FormLayout title="Se connecter" submit={handleSubmit} error={error} message={message} footer={
      <span>
        Vous n'êtes pas encore inscrit ?{" "}
        <Link to="/auth/register">Inscrivez-vous</Link>
      </span>
    } >
      <FormField
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormField
        type="password"
        name="password"
        id="password"
        placeholder="Mot de passe"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <SubmitButton value="Se connecter" />
      
    </FormLayout>
  )
}

export default Login
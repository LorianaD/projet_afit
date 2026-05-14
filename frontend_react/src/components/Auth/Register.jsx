import { Link, useNavigate } from "react-router";
import useRegister from "../../hooks/useRegister";
import FormLayout from "../ui/form/FormLayout";
import FormField from "../ui/form/FormField";
import SubmitButton from "../ui/form/SubmitButton";
import registerUser from "../../services/auth/RegisterService";

function Register() {
  const {
    formData,
    error,
    message,
    handleChange,
    submitRegister,
  } = useRegister();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await submitRegister();

    if (result.success) {
      navigate("/login");
    }
  };

  return (
    <FormLayout
      title="Inscrivez-vous afin de commencer l'aventure !"
      submit={handleSubmit}
      error={error}
      message={message}
      footer={
        <span>
          Vous êtes déjà inscrit ?{" "}
          <Link to="/login">Connectez-vous</Link>
        </span>
      }
    >
      <FormField
        type="name"
        name="name"
        id="name"
        label="Votre nom"
        placeholder="ex. DU PONT"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <FormField
        type="firstname"
        name="firstname"
        id="firstname"
        label="Votre prénom"
        placeholder="ex. Jean"
        value={formData.firstname}
        onChange={handleChange}
        required
      />

      <FormField
        type="username"
        name="username"
        id="username"
        label="Votre pseudo"
        placeholder="ex. JeanGym"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <FormField
        type="email"
        name="email"
        id="email"
        label="Votre adresse e-mail"
        placeholder="ex. Jean.dupont@example.com"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormField
        type="password"
        name="password"
        id="password"
        label="Votre mot de passe"
        placeholder="8 caractères au minimum"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <FormField
        type="date"
        name="birthday"
        id="birthday"
        label="Votre date de naissance"
        value={formData.birthday}
        onChange={handleChange}
        required
      />

      <div className="intem-box">
        <label htmlFor="gender">Votre genre</label>
        <select name="gender" id="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Choisissez votre genre</option>
          <option value="female">Féminin</option>
          <option value="male">Masculin</option>
        </select>
      </div>

      <FormField
        type="number"
        name="height"
        id="height"
        label="Votre taille (en cm)"
        placeholder="ex. 160"
        value={formData.height}
        onChange={handleChange}
        required
      />

      <FormField
        type="number"
        name="weight"
        id="weight"
        label="Votre poids actuel"
        placeholder="ex. 65"
        value={formData.weight}
        onChange={handleChange}
        required
      />

      <FormField
        type="number"
        name="goal"
        id="goal"
        label="Votre objectif"
        placeholder="ex. 60"
        value={formData.goal}
        onChange={handleChange}
        required
      />

      <SubmitButton value="S'enregistrer" />
    </FormLayout>
  );
}

export default Register;

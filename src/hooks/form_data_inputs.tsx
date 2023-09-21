import React from "react";
import useForm from "./form_data";

const MyForm: React.FC = () => {
  const { formData, formErrors, handleChange, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            name="name"
             value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
             value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default MyForm;

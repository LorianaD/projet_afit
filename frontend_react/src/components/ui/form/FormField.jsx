function FormField({ label, type = "text", name, id, placeholder, value, onChange, required = false }) {
    return (
        <div className="app-form__field">
            {label && <label htmlFor={id}>{label}</label>}

            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
}

export default FormField;
function FormSelect({ label, name, id, value, onChange, options }) {
    return (
        <div className="app-form__field">
            <label htmlFor={id}>{label}</label>

            <select name={name} id={id} value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FormSelect;
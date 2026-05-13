import { Link } from "react-router";

function SubmitButton({ value, cancel }) {
    return (
        <div className="app-form__actions">
            {cancel && (
                <Link to="/dashboard" className="btn btn-secondary">
                    { cancel }
                </Link>
            )}
            <input type="submit" value={value} className="btn btn-primary" />
        </div>
    );
}

export default SubmitButton;
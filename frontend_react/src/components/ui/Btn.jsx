import { Link } from "react-router";

function Btn({ children, variant = "primary", to, type = "button" }) {

    const classes = {
        primary: "btn btn-primary",
        secondary: "btn btn-secondary",
    }

    if (to) {
        return (
            <Link to={ to } className={classes[variant]}>
                { children }
            </Link>
        )
    }

    return (
        <button type={ type } className={ classes[variant] }>
            { children }
        </button>
    )
    
}

export default Btn;
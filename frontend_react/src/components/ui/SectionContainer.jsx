function SectionContainer({ children, id, variant = "default", className = "" }) {
    return (
        <section
            id={id}
            className={`section section--${variant} ${className}`.trim()}
        >
            {children}
        </section>
    );
}

export default SectionContainer;
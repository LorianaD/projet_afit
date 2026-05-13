function Main({ children, variant = "" }) {
    return (
        <main className={`main ${variant ? `main--${variant}` : ""}`}>
            <div className="main__container">
                {children}
            </div>
        </main>
    );
}

export default Main;
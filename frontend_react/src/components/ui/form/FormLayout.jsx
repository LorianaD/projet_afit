function FormLayout({ title, submit, children, error, message, footer }) {
    return (
        <section className="app-form">
            <div className="app-form__card">
                <h2 className="app-form__title">{title}</h2>

                <form onSubmit={submit} className="app-form__form">

                {children}

                    <div className="app-form__messages">
                        {error && 
                            <p className="app-form__error">
                                {error}
                            </p>
                        }

                        {message && 
                            <p className="app-form__success">
                                {message}
                            </p>
                        }
                    </div>

                </form>

                {footer && 
                    <div className="app-form__footer">
                        {footer}
                    </div>
                }
            </div>
        </section>
    );
}

export default FormLayout;
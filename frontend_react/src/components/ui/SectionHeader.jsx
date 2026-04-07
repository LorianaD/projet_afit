import Btn from './Btn.jsx'

function SectionHeader({ title, description, link, cta, align = "left" }) {
    return (
        <div className={`section-header section-header--${align}`}>
            <div className="section-header__content">
                <h2 className="section-header__title">
                    { title }
                </h2>

                {description && (
                    <p className="section-header__description">
                        { description }
                    </p>
                )}
            </div>

            {link && cta && (
                <div className="section-header__actions">
                    <Btn variant="secondary" to={link}>
                        { cta }
                    </Btn>
                </div>
            )}
        </div>
    );
}

export default SectionHeader;
import { Link } from "react-router";

function InfoCard({ title, description, link, img, cta }) {
    return (
        <article className="info-card">
            {img && (
                <div className="info-card__media">
                    <img src={img} alt={title} className="info-card__img" />
                </div>
            )}

            <div className="info-card__content">
                <h3 className="info-card__title">
                    { title }
                </h3>
                <p className="info-card__description">
                    { description }
                </p>
            </div>

            {link && (
                <Link to={link} className="info-card__link">
                    { cta || "Découvrir" }
                </Link>
            )}
        </article>
    );
}

export default InfoCard;
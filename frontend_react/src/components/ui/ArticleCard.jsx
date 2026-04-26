import { Link } from "react-router";
import Btn from "./Btn";

function ArticleCard({ title, description, link, cta, img }) {
    return(
        <article className="article-card">
            <div className="article-card__text">
                <h4 className="article-card__title">
                    { title }
                </h4>
                <p className="article-card__description">
                    { description }
                </p>
                {link && (
                    <Btn to={link} className="info-card__link">
                        { cta || "Découvrir" }
                    </Btn>
                )}           
            </div>
            <div className="article-card__media">
                <img src={ img } alt="" className="article-card__img"/>
            </div>
        </article>
    )
}

export default ArticleCard;
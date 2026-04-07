import BadgeSectionHero from "./BadgeSectionHero";
import Btn from "./Btn";

function SectionHero({ title, description, primaryBtn, secondaryBtn, badge, primaryLink, secondaryLink, img }) {
    return (
        <section className="section-hero" style={img ? { backgroundImage: `url(${img})` } : {}}>
            <div className="section-hero__overlay"/>
            <div className="section-hero__content">
                <BadgeSectionHero>
                    { badge }
                </BadgeSectionHero>
                <div className="section-hero__text">
                    <h2 className="section-hero__title">
                        { title }
                    </h2>
                    <p className="section-hero__description">
                        { description }
                    </p>
                    <div className="section-hero__actions" >
                        <Btn variant="primary" to={primaryLink} >
                            { primaryBtn }
                        </Btn>
                        <Btn variant="secondary" to={secondaryLink} >
                            { secondaryBtn }
                        </Btn>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionHero;
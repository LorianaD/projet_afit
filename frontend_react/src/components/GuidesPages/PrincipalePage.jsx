import Main from "../ui/Main";
import SectionHero from "../ui/SectionHero";
import { articlesSection, hero } from "../../data/guidesPages/principalePage";
import SectionContainer from "../ui/SectionContainer";
import ArticleCard from "../ui/ArticleCard";
import SectionHeader from "../ui/SectionHeader";

function PrincipalePage() {

    const articles = articlesSection.articles;

    return (
        <Main>
            <SectionHero title={hero.title} description={hero.description} badge={hero.badge}/>
            <SectionContainer>
                <SectionHeader title={articlesSection.title}/>
                {articles.map((article) =>
                    <ArticleCard key={article.title} title={article.title} description={article.description} img={article.img} link={article.link} cta={article.cta}/>
                )}
            </SectionContainer>
        </Main>
    )
}

export default PrincipalePage;
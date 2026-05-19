import { Main, SectionHero, SectionHeader, SectionContainer, ArticleCard } from "../../components/ui";
import { articlesSection, hero } from "../../data/advicesPages/principalePage";

function PrincipalePage() {

    const articles = articlesSection.articles;

    return (
        <Main variant="home">
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

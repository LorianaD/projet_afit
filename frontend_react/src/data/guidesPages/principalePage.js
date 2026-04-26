import meal3 from "../../assets/img/meal3.jpg";
import protein from "../../assets/img/protein.jpg";
import bodyMeasure2 from "../../assets/img/bodyMeasure2.png";
import mistakes from "../../assets/img/commonMistakes.png";
import { GUIDE_ROUTES } from "../routes";

const hero = {
    badge: "Guides pratiques",    
    title: "Des méthodes concrètes pour passer à l’action",
    description: "Au-delà des conseils généraux, retrouvez des repères simples à appliquer dans votre quotidien.",
}

const articlesSection = {
    title: "",
    description: "",
    articles: [
        {
            title: "Construire un repas équilibré",
            description: "Commencer par une base simple : légumes, protéines, féculents adaptés et portion raisonnable.",
            img: meal3,
            cta: "Voir le guide",
            link: GUIDE_ROUTES.meal
        },
        {
            title: "Comprendre le rôle des protéines",
            description: "Les protéines aident à préserver la masse musculaire, la satiété et soutiennent la récupération.",
            img: protein,
            cta: "Voir le guide",
            link: GUIDE_ROUTES.protein
        },
        {
            title: "Mieux suivre ses progrès",
            description: "Observer les tendances plutôt que les variations d’un seul jour.",
            img: bodyMeasure2,
            cta: "Voir le guide",
            link: GUIDE_ROUTES.progress
        },
        {
            title: "Éviter les erreurs fréquentes",
            description: "Éviter les restrictions trop fortes, le grignotage automatique et les objectifs irréalistes.",
            img: mistakes,
            cta: "Voir le guide",
            link: GUIDE_ROUTES.mistakes
        }
    ]
}

export {
    hero,
    articlesSection
}
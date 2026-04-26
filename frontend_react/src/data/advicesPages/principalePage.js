import { ADVICE_ROUTES } from "../routes"
import meal from "../../assets/img/meal.png";
import meal2 from "../../assets/img/meal2.png";
import bodyMeasure from "../../assets/img/bodyMeasure.png";

const hero = {
    badge : "Conseils",
    title : "Explorez les essentiels du quotidien",
    description : "Des repères simples pour mieux manger, mieux comprendre votre corps et adopter des habitudes plus durables."
}

const articlesSection = {
    title : "Les premiers repères à connaître",
    articles : [
        {
            title : "Différents objectifs alimentaires",
            description : "IG bas, sèche, stabilisation ou équilibre alimentaire : chaque objectif demande une approche différente.",
            link: ADVICE_ROUTES.foodgoals,
            img: meal
        },
        {
            title : "Mieux construire ses repas",
            description : "Un repas équilibré peut contenir des protéines, des légumes, des féculents adaptés, un fruit ou un laitage.",
            link: ADVICE_ROUTES.mealbuilding,
            img: meal2
        },
        {
            title : "Comprendre son corps",
            description : "Le poids seul ne suffit pas. Masse grasse, masse musculaire et hydratation donnent une vision plus complète.",
            link: ADVICE_ROUTES.bodyunderstanding,
            img: bodyMeasure
        }
    ]
}

export {
    hero,
    articlesSection
}
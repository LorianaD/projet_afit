/////////////////////////////////////////////////////////////
/////////////////////// Calculer l'age //////////////////////
/////////////////////////////////////////////////////////////

function getAge(birthday) {
    // je recupére les dates d'aujourd'hui et l'anniversaire pour les manipuler avec l'objet natif Date().
    const today = new Date();
    const birth = new Date(birthday);

    // extrait l'année des dates (4 chiffres) et calcule le nombre d'année
    let age = today.getFullYear() - birth.getFullYear();
    // extrait le mois des dates, sachat que janvier = 0; et calcule le nombre de mois
    const month = today.getMonth() - birth.getMonth();
    // extrait le jour du mois des dates.
    const day = today.getDate() - birth.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }

    return age;
}

////////////////////////////////////////////////////////////
///////////////////////// Calculer l'IMC ///////////////////
////////////////////////////////////////////////////////////

function IMC(weight, height) {
    // (poids/(taille*taille))*10000
    let imc = (weight/(height*height)*10000);

    let resultIMC = "";

    if (imc > 25) {
        resultIMC = "Surpoids";
        // return resultIMC;
    } else if(imc < 18.5) {
        resultIMC = "Maigre";
        // return resultIMC;
    } else {
        resultIMC = "Normal";
        // return resultIMC;
    }

    return {
        imc: Number(imc.toFixed(1)),
        category: resultIMC
    };
}

////////////////////////////////////////////////////////////
//////////////////// Evolution Perte ou Prise //////////////
////////////////////////////////////////////////////////////

function evoLostOrWin(newWeight, lastWeight) {
    let evolution = (newWeight - lastWeight);
    let resultEvo = Number(evolution.toFixed(1));
    return resultEvo;
}

////////////////////////////////////////////////////////////
////////////////// Calcule du Reste à perdre ///////////////
////////////////////////////////////////////////////////////

function remnant(currentWeight, goal) {
    let rest = (goal - currentWeight);
    let resultRest = Number(rest.toFixed(1));
    return resultRest;
}

module.exports = {
    getAge,
    IMC,
    evoLostOrWin,
    remnant
}
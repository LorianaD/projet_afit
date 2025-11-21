const db = require('../models');
// console.log(db);
const Weight = db.weight;
// console.log(Weight);
const Users =db.Users;
const { IMC, evoLostOrWin, remnant } = require('../utils/calculate');


////////////////////////////////////////////////////////
//////////////// INSERTION DU POIDS ////////////////////
////////////////////////////////////////////////////////

exports.createWeight = async (req, res) => {
    // console.log("test de la route createWeight");
    // res.send("test de la route pour createWeight");
    try {

        /********************************************
        ************ Logique pour le poids **********
        ********************************************/

        // on recupére le poids inséré
        const { weight } = req.body;
        console.log(weight, "try bon, récupération operationel");

        if (!weight) {
            return res.status(400).json({
                success: false,
                message: "il faut insérer un poids, si tu veux voir ta progression.",
                date: null
            })
        }

        /********************************************
        ************ Logique pour l'id **************
        ********************************************/        

        // on recupére le id du user
        const userId = req.user?.id || req.user?.sub;
        console.log(userId);
        console.log(req.user);       

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Utilisateur non trouvé",
                data: null
            })
        }

        const newWeight = await Weight.create({
            weight: weight,
            user_id: userId
        })
        console.log(newWeight, "newWeight bon");
        res.status(201).json({
            success: true,
            message: 'poids enregistré',
            date: newWeight
        })
    } catch (error) {
        console.error('erreur sur la create', error);
        res.status(500).json({
            success: false,
            message:'erreur sur la create',
            data: null
        })        
    }
}

////////////////////////////////////////////////////////
//////////////// LISTE DES POIDS ///////////////////////
////////////////////////////////////////////////////////

exports.weightList = async (req, res) => {
    try {

        // on recupére le id du user
        const userId = req.user?.id || req.user?.sub;
        
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Utilisateur non trouvé",
                data: null
            })
        }
        
        // on recupére les infos de l'utilisateur, height et goal
        const user = await Users.findByPk(userId);
        console.log(user);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "utilisateur non réconu",
                data: null
            })
        }

        const weightsList = await Weight.findAll({
            where: {user_id: userId},
            order: [["created_at", "ASC"]]
        })

        // ajouter les calculs de l'utils

        let lastWeight;

        const enrichList = weightsList.map((record) => {
            const currentWeight = Number(record.weight);
            // evolution du poids
            let evolution;
            if (lastWeight !== null) {
                evolution = evoLostOrWin(lastWeight, currentWeight);
            }
            // IMC
            const imcData = IMC(currentWeight, user.height);
            // reste à perdre
            let restToGoal;
            if (user.goal) {
                restToGoal = remnant(currentWeight, Number(user.goal));
            }

            lastWeight = currentWeight;

            return {
                id: record.id,
                weight: currentWeight,
                created_at: record.created_at,
                evolution,
                imc: imcData,
                restToGoal
            }
        })

        enrichList.reverse();

        res.status(200).json({
            success: true,
            message: 'liste des enregistrations',
            data: enrichList
        })
    } catch (error) {
        console.error('erreur sur la getWeight:', error);
        res.status(500).json({
            success: false,
            message: 'erreur sur la getWeights',
            data: null
        })
    }
}

exports.test = (req, res) => {
    console.log("route pour tester mon controller des weight");
    res.send("route pour tester mon controller des weight")
}
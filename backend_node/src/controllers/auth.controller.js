const authService = require('../services/auth.service');
const { validationResult } = require('express-validator');

exports.register = async (req, res) => {
    // console.log("route de register");
    // res.send("route de register");

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log("Erreurs de validation register :", errors.array());
        return res.status(400).json({
            success: false,
            errors: errors.array()
        })
    }

    try {
        const user = await authService.register(req.body);
        return res.status(201).json({
            success: true,
            message: 'user crée avec succes',
            data: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            console.error("Erreur dans authService.register :", error);
            return res.status(409).json({
                success: false,
                message: 'Email deja utilisé',
                data: null
            })
        }
        console.log("Erreurs de validation register :", errors.array());
        return res.status(500).json({
            success: false,
            message: 'erreur interne',
            data: null
        })
    }
}

exports.login = async (req, res) => {
    // console.log("route de login");
    // res.send("route de login")
    try {

        // Vérifier les erreurs de validations

        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            //stop si jamais payload invalide
            return res.status(400).json({
                success:false,
                errors: errors.array()
            })
        }

        // Vérifier les identifiants

        const user = await authService.validateCredentials(req.body);
        
        if(!user){
            return res.status(401).json({
                succes: false,
                message: 'indentifiants erronés',
                data: null
            })
        }

        // Générer le token

        const token = authService.generateToken(user);

        // Retour de la reponse au front

        return res.status(200).json({
            succes:true,
            message:"connexion réussie",
            data: {token}
        })

    } catch (error) {
        console.error("Erreur dans le login", error);
        return res.status(500).json({
            succes: false,
            message: 'Erreur serveur'
        });
    }
};

exports.test = (req, res) => {
    console.log("route pour tester mon controller de l'authification");
    res.send("route pour tester mon controller de l'authification")
}
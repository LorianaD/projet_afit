const { getAge } = require('../utils/calculate');
const { getFirstMeasureDate } = require('../utils/weightStats');

exports.userProfile = async (req, res) => {
    // console.log("test de la route du userProfile");
    // res.send("test de la route du userProfile");
    try {
        
        // on recupére le id du user
        // const userId = req.user?.id || req.user?.sub;
        // console.log(userId);

        // if (!userId) {
        //     return res.status(401).json({
        //         success: false,
        //         message: "Utilisateur non trouvé",
        //         data: null
        //     })
        // }

        // on recupére les infos de l'utilisateur, height et goal
        // const user = await Users.findByPk(userId);
        // console.log(user);
        
        // if (!user) {
        //     return res.status(404).json({
        //         success: false,
        //         message: "utilisateur non réconu",
        //         data: null
        //     })
        // }

        // res.status(200).json({
        //     success: true,
        //     message: 'information du profil',
        //     data: user
        // })        

    } catch (error) {
        // console.error('erreur sur la getWeight:', error);
        // res.status(500).json({
        //     success: false,
        //     message: 'erreur sur la getWeights',
        //     data: null
        // })        
    }
}

exports.updateProfile = (req, res) => {
    console.log("test de la route du updateProfile");
    res.send("test de la route du updateProfile");
}

exports.test = (req, res) => {
    console.log("route pour tester mon controller des user");
    res.send("route pour tester mon controller des user")
}
exports.register = (req, res) => {
    console.log("route de register");
    res.send("route de register");
}

exports.login = (reg, res) => {
    console.log("route de login");
    res.send("route de login")
}

exports.test = (req, res) => {
    console.log("route pour tester mon controller de l'authification");
    res.send("route pour tester mon controller de l'authification")
}
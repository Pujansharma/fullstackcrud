const jwt = require("jsonwebtoken");
const authntication = (req,res,next) =>{
    const token = req.headers.authorization
    if(token) {
        jwt.verify(token, "masai", (err, decoded) => {
            if (decoded) {
                next()
            } else {
                res.send({ "mssg": "login first" ,"err":err})
            }
        })
    } else{
        res.send({ "mssg": "login first" ,"err":err})
    }
    // if(token)
}
module.exports = {
    authntication
}
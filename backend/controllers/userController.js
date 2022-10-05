const asyncHandler = require("express-async-handler")

// @ desc Regiser a new user
// @route /api/users
// @access Public 

const registerUser = asyncHandler(async(req, res ) =>{
    // console.log(req.body)
    const {name, email, password} = req.body

    //validation
    if(!name || !email || !password){
        res.status(400)
        throw new Error("please include all fields")
    }
    res.send("Register Route")
}) 


// @ desc Login a user
// @route /api/users/login
// @access Public 
const loginUser = asyncHandler (async (req, res ) =>{
    res.send("login Route")
})


module.exports = {
    registerUser,
    loginUser
}
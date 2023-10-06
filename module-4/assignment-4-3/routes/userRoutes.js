const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

const routeMiddleWare = (req, res, next) => {
    console.log("req.body.role: " + req.body.role)
    if(req.body.role === "admin"){
        next();
    } else {
        res.status(403);
        res.send("Only admins can access this endpoint");
    }
}

//Return all users (security risk)
router.get("/", userController.getAllusers);

//localhost:3000/users/login
// post method
// body
// json
// {
//     "username": "swoow3",
//     "password": "swoo_w3schools",
// }

router.post("/login", userController.getSingleuser);

//localhost:3000/users/register
// post method
// body
// json

// {
//     "role":"admin",
//     "name": "Samantha Woo"
// }

router.post("/register", routeMiddleWare, userController.addNewuser);

module.exports = router;
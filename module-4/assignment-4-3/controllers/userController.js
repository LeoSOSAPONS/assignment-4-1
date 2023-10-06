const users = [
    {
        id: 1,
        username: "bsmithw3",
        email: "bsmith@mail.com",
        password: "bsmithw3_2023",
        name: "Brandon Smith"
    },
    {
        id: 2,
        username: "swoow3",
        email: "swoo@mail.com",
        password: "swoo_w3schools",
        name: "Samantha Woo"
    }
]

//Return all users (security risk)
 exports.getAllusers = (req, res) => {
     res.json(users);
 }

//login
exports.getSingleuser = (req, res) => {
    const {username, password} = req.body; 
    console.log(req.url);
    console.log(req.body);

    console.log("Passed username: " + username)
    console.log("Passed password: " + password)

    const canLogin = users.some((item)=>{
        // console.log('Read from users array: ' + item.username);
        // console.log('Read from users array: ' + item.password);

            return (item.username == username && item.password == password)
        }
    )

    if (canLogin) {
        res.status(200);
        return res.send("Login successful.");
    } else {
        res.status(403);
        res.send("Login failed");
    }
}

//register
exports.addNewuser = (req, res) => {
    if (users.length > 0 && users.some((f) => f.name === req.body.name)) {
        console.log(req.body);
        console.log(req.body.name);
        console.log('-----------');

        res.status(409);
        return res.send("user already exists");
    }

    // Grabbing last user ID and adding one
    let index = users[users.length - 1].id + 1;
    const newuser = {
        id : index,
        name : req.body.name
    }
    users.push(newuser);
    res.json(newuser);
}
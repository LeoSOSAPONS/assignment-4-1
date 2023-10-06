const express = require("express");
const userRoute = require("./routes/userRoutes"); //Load the route modules

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log("This middleware is encountered before every endpoint");
    next(); //The next method allows the function to serve the next part of the server call.
});

app.use("/users", userRoute); // Will use "/user" as it's root route for all user routes.

app.listen(port, () => {
    console.log('=============================')
    console.log(`App listening on port ${port}`);
});
                            
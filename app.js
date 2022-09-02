/* Run Server :   npm run start */
//*  Import express */
const express = require("express");

/* Import sequelize DataType */

//* Model tRegistration  */
const { tRegistration } = require("./models/registration.model");

//* Routers */
const { registrationRouter } = require("./routers/registration.routes");

//* Init our Express  app */
const app = express();

// Enable express app to receive JSON data
app.use(express.json()); // MiddLeware

//* Define endpoints */
app.use("/api/v1/registration", registrationRouter);

//* Catch non-existing endpoint  */
app.all("*", (req, res) => {
    res.status(400).json({
        status: "error",
        message: `${req.method} ${req.url} does not exits in our server `,
    });
});

module.exports = { app };

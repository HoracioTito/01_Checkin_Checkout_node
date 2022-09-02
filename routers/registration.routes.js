const express = require("express");

//* Controllers */
const {
    getAllRegistration,
    getRegistration,
    createRegistration,
    updateRegistration,
    deleteRegistration,
} = require("../controllers/registration.controller");

const registrationRouter = express.Router();

//**  getAllRegistration  */
registrationRouter.get("/", getAllRegistration);

//**  getRegistration    */
registrationRouter.get("/:id", getRegistration);

//**  createRegistration */
registrationRouter.post("/", createRegistration);

//**  updateRegistration (use status ) */
registrationRouter.patch("/:id", updateRegistration);

//**  deleteRegistration (use status ) */
registrationRouter.delete("/:id", deleteRegistration);

module.exports = { registrationRouter };

//**  Models  */
const { tRegistration } = require("../models/registration.model");

//* Endpoints */

//*  get all registrations where register status = 'working' */
const getAllRegistration = async (req, res) => {
    try {
        const registrations = await tRegistration.findAll({
            where: { status: "working" },
        });

        res.status(200).json({
            status: "success",
            data: {
                registrations,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

//* get registration with params id */
const getRegistration = async (req, res) => {
    try {
        const { id } = req.params;
        const registrationOne = await tRegistration.findOne({ where: { id } });

        if (!registrationOne) {
            return res.status(404).json({
                status: `No register with id =>${id}`,
            });
        }

        /* Response success  */
        res.status(200).json({
            status: "success",
            data: {
                registrationOne,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

//* Register entranceTime for deafult status = 'working' */
const createRegistration = async (req, res) => {
    try {
        const { entranceTime } = req.body;

        const newRegister = await tRegistration.create({ entranceTime });

        // 201 -> Success and a resource has been created
        res.status(200).json({
            status: "success",
            data: { newRegister },
        });
    } catch (error) {
        console.log(error);
    }
};

//* updateRegistration with params id , Status : out */
const updateRegistration = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        console.log(id);

        //* Exits register id */
        const registrationOne = await tRegistration.findOne({ where: { id } });

        //* Control exists id */
        if (!registrationOne) {
            return res.status(404).json({
                status: `No register with id =>${id}`,
            });
        }

        //* Update */
        await registrationOne.update({ status });

        res.status(200).json({
            status: "success",
            data: {
                registrationOne,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

//* delete register ( soft delete ) */
const deleteRegistration = async (req, res) => {
    try {
        const { id } = req.params;
        const registerOne = await tRegistration.findOne({ where: { id } });

        console.log(registerOne);

        //* Is exits register id */
        if (!registerOne) {
            return res.status(404).json({
                status: `No register with id =>${id}`,
            });
        }
        // Soft delete
        await registerOne.update({
            status: "deleted",
        });

        res.status(200).json({ status: "success deleted" });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllRegistration,
    getRegistration,
    createRegistration,
    updateRegistration,
    deleteRegistration,
};

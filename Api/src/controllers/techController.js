const techService = require('../services/techServices');

const getUsers = async (req, res) => {
    try {

        const users = await techService.getUsers();

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getUsers,

};
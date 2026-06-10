const userRepository = require('../repositories/techRepository');

const getUsers = async () => {
    return await userRepository.getAllUsers();
};

module.exports = {
    getUsers,

};
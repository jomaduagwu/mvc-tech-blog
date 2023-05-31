const { User} = require('../models');

const userData = [
    {
        username: "johndoe",
        email: "johndoe@mail.com",
        password: "johnpassword",
    },
    {
        username: "anuli",
        email: "anuli@mail.com",
        password: "anulipassword",
    },
    {
        username: "sarahlee",
        email: "sarah@mail.com",
        password: "sarahpassword",
    },
    {
        username: "ivyhouse",
        email: "ivy@mail.com",
        password: "ivypassword",
    },
    {
        username: "olucodes",
        email: "olu@mail.com",
        password: "olupassword",
    },

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
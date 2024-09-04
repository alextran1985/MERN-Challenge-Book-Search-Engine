const User = require('../models/User');

const resolvers = {
    Query: {
        getUsers: async (parent, args, context) => {
            // our usual DB request
            const allUsers = await User.find({})

            return allUsers;  // []
        },
    //    getSingleUser: async (parent, args, context) => {
        getSingleUser: async (parent, { email }, context) => {
            const foundUser = await User.findOne({ where: { email: email}})

            return foundUser;
        }
    },

    Mutation: {

    }
}



module.exports = resolvers;
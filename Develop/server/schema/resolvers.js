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
        createUser: async (parent, args) => {
            const matchup = await Matchup.create(args);
            return matchup;
          },
          createBook: async (parent, { _id, techNum }) => {
            const vote = await Matchup.findOneAndUpdate(
              { _id },
              { $inc: { [`tech${techNum}_votes`]: 1 } },
              { new: true }
            );
            return vote;
          },
    }
}



module.exports = resolvers;
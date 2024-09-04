const User = require('../models/User');

const resolvers = {
    Query: {
        getMe: async (parent, args, context) => {
            if(context.user) {
                // our usual DB request
                const found = await User.findOne({ _id: context.user._id})
    
                return found;  // []
            }
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
        saveBook: async (parent, args, context) => {

            console.log('incoming Data: ', args); // { authors: [], desc ... }
        }
    }
}



module.exports = resolvers;
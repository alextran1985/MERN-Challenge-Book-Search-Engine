const typeDefs = `
    type User {
        _id: ID, 
        username: String,
        email: String,
    }

    type Book {
        bookId: ID,
        authors: [String],
        description: String,
        image: String,
        link: String,
        title: String
    }

    type Query {
        getUsers: [User]
        getSingleUser(email: String!): User
    }

    type Mutation {

    }
`;

module.export = typeDefs;
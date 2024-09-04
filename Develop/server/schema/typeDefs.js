const typeDefs = `
    type User {
        _id: ID, 
        username: String,
        email: String,
        bookCount: String,
        savedBooks: [Book]

    }
    type Auth {
        token: String,
        User: String,
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
        login (email: String!, password:String!): Auth
        addUser (username: String!, email:String!, password:String!): Auth
        saveBook ([Auth], description: String!, title: String!, bookId: String!, image: , link: String!): User
        removebook (bookId: String!): User
    }
`;

module.export = typeDefs;
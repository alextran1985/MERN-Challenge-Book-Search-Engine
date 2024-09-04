import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser(username:String!, email:String!) {
    loginUser(username:String!, email:String!) {
        _id
        username
        email
        bookCount
        savedBooks

    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(username:String!, email:String!) {
    createUser(username:String!, email:String!) {
        _id
        username
        email
        bookCount
        savedBooks

    }
  }
`;

export const CREATE_SAVE_BOOK = gql`
  mutation saveBook(bookId: ID, authors: [String],title: String!) {
    saveBook(bookId: ID, authors: [String],title: String!) {
        bookId
        authors
        description
        image
        link
        title
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook(bookId: ID, authors: [String],title: String!) {
    removeBook(bookId: ID, authors: [String],title: String!) {
        bookId
        authors
        description
        image
        link
        title
    }
  }
`;

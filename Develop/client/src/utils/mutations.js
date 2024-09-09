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
  mutation addUser(username:String!, email:String!) {
    addUser(username:String!, email:String!) {
        _id
        username
        email
        bookCount
        savedBooks

    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String, $authors: [String], $title: String!, $description: String!, $image: String, $link: String) {
    saveBook(bookId: $bookId, authors: $authors,title: $title, description: $description, image: $image, link: $link) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            image
            link
            title
        }
    }
  }
`;
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            image
            link
            title
        }
    }
  }
`;

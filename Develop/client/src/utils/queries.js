import { gql } from '@apollo/client';

export const QUERY_CURRENT_USER = gql`
    query getMe {
        getMe {
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
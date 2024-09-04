import { gql } from '@apollo/client`';

export const QUERY_ALL_USERS = gql`
    {
        getUsers [
            {
                _id
                username
                email
            }
        ]
    }
`
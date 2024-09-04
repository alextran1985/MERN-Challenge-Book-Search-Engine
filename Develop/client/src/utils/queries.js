import { gql } from '@apollo/client`';

export const QUERY_ALL_USERS = gql`
    {
        getMe [
            {
                _id
                username
                email
            }
        ]
    }
`
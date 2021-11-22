import gql from 'graphql-tag'

const allTeam = gql`
query{
  allTeam{
    edges{
      node{
        id
        name
      }
    }
  }
}
`

export { 
    allTeam
};
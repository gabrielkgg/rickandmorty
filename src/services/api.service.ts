import { ApolloClient, DocumentNode, InMemoryCache } from '@apollo/client'

export const api = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
})

export async function apiQuery(query: DocumentNode): Promise<any> {
    return (await api.query({ query })).data
}

//api.query({ query }).then((result) => console.log(result))

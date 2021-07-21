import { ApolloClient, DocumentNode, InMemoryCache } from '@apollo/client'
import { ApiPayloadDto } from '../dto/apiPayload.dto'

export const api = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
})

export async function apiQuery(query: DocumentNode): Promise<ApiPayloadDto> {
    return await api.query({ query, errorPolicy: 'all' })
}

//api.query({ query }).then((result) => console.log(result))

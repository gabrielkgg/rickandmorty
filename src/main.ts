import { createApp } from 'vue'
import App from './App.vue'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const api = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
})

const query = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`

api.query({
    query,
}).then((res) => console.log(res))

createApp(App).mount('#app')

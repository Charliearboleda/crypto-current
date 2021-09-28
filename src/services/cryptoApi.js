import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '6b8de66978mshe85811d67b8df37p1854cejsn2527e16c95fe'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

var options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/exchanges',
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '6b8de66978mshe85811d67b8df37p1854cejsn2527e16c95fe'
  }
};

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery:fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi

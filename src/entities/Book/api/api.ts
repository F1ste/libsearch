import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBook } from '../model/Book'

const BASE_URL = 'https://www.googleapis.com'

interface GetDataParams {
    query?: string,
    category?: string
    page?: number,
    limit?: number,
    orderBy?: string,
}

interface ResponseParams {
    totalItems: number
    items?: IBook[]
}
export const bookAPI = createApi({
    reducerPath: 'bookAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['book'],
    endpoints: (build) => ({
        fetchBooks: build.query<ResponseParams, GetDataParams>({
            query: ({ limit = 30, query = '', page = 1, category = '', orderBy = 'relevance' }) => ({
                url: '/books/v1/volumes',
                params: {
                    _q: `+intitle:${query}${category === '' ? '' : `+subject:${category}`}`,
                    _maxResults: limit,
                    _startIndex: limit * (page - 1),
                    _orderBy: orderBy,
                }
            }),
            providesTags: ['book'],
            serializeQueryArgs: ({ endpointName}) => {
                return endpointName;
            },
            merge: (currentCache, newItems) => {
                currentCache.items?.push(...(newItems.items ?? []))
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg?.page !== previousArg?.page
            },
        }),
        fetchSingleBook: build.query<IBook, string>({
            query: (bookId) => ({
                url: `/books/v1/volumes/${bookId}`
            })
        })
    })
})
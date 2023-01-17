import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '6eb8deae3emshda5abc499f3611dp149106jsncfc4f2a37e73');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopTracks: builder.query({query: (genre) => `/charts/track?locale=en-US&listId=ip-country-chart-${genre}&pageSize=20&startFrom=0`}),
        getTopTracksTwo: builder.query({query: () => '/charts/track?locale=en-US&listId=ip-country-chart-US&pageSize=20&startFrom=0'}),
        getSongDetails: builder.query({query:({songid}) => `/songs/get-details?key=${songid}`}),
        getRelatedSongs: builder.query({query: ({songid}) => `/songs/list-recommendations?key=${songid}`}),
        getArtistDetails: builder.query({query:(artistId) => `/artists/get-top-songs?id=${artistId}`}),
        getSongsByCountry: builder.query({query:() => `/charts/list`}),
        getSongBySearch: builder.query({query:(searchTerm) => `/search?term=${searchTerm}&locale=en-US&offset=0&limit=5`}),

    }),

});

export const {
    useGetTopTracksQuery,
    useGetTopTracksTwoQuery,
    useGetSongDetailsQuery,
    useGetRelatedSongsQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongBySearchQuery,
} = shazamApi;
import { api } from '@/Services/api'

export const listMarketCapApi = api.injectEndpoints({
    endpoints: build => ({
        listMarketCap: build.query({
            query: () => ({
                url: 'job-setting/list-market-cap',
                method: 'GET',
                params: {
                    page: 1,
                    limit: 10000,
                    second: 3600
                }
            }),
        })
    }),
    overrideExisting: true,
})

export const { useListMarketCapQuery } = listMarketCapApi

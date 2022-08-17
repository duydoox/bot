import { api } from '@/Services/api'
import listMarketCap from './listMarketCap'
import retrieve from './retrieve'
import notInJob from './notInJob'
import accountSignal from './accountSignal'

export const listMarketCapApi = api.injectEndpoints({
    endpoints: build => ({
        listMarketCap: listMarketCap(build),
        retrieve: retrieve(build),
        notInJob: notInJob(build),
        accountSignal: accountSignal(build),
    }),
    overrideExisting: false,
})

export const { 
    useListMarketCapQuery,
    useRetrieveQuery,
    useNotInJobQuery,
    useAccountSignalQuery,
 } = listMarketCapApi

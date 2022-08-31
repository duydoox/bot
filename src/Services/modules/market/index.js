import { api } from '@/Services/api'
import listMarketCap from './listMarketCap'
import retrieve from './retrieve'
import notInJob from './notInJob'
import accountSignal from './accountSignal'
import history from './history'

export const listMarketCapApi = api.injectEndpoints({
    endpoints: build => ({
        listMarketCap: listMarketCap(build),
        retrieve: retrieve(build),
        notInJob: notInJob(build),
        accountSignal: accountSignal(build),
        history: history(build)
    }),
    overrideExisting: false,
})

export const { 
    useListMarketCapQuery,
    useRetrieveQuery,
    useNotInJobQuery,
    useAccountSignalQuery,
    useLazyAccountSignalQuery,
    useHistoryQuery,
    useLazyHistoryQuery,
    usePrefetch,
 } = listMarketCapApi

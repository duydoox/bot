import { api } from '@/Services/api'
import info from './info'

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    info: info(build),
  }),
  overrideExisting: true,
})

export const { useInfoQuery } = userApi

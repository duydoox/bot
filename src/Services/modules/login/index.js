import { api } from '@/Services/api'

export const loginApi = api.injectEndpoints({
    endpoints: build => ({
        login: build.mutation({
            query: (body) => ({
                url: 'account/login',
                method: 'POST',
                body //{email: "user0002@gmail.com", password: "Hh223344@", tfaCode: "111111"}
            }),
        })
    }),
    overrideExisting: true,
})

export const { useLoginMutation } = loginApi

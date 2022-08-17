import { api } from '@/Services/api'
import { updateAuth } from '@/Store/Auth'
import { setMessage } from '@/Store/Login'

export const loginApi = api.injectEndpoints({
    endpoints: build => ({
        login: build.mutation({
            query: (body) => ({
                url: 'account/login',
                method: 'POST',
                body //{email: "user0002@gmail.com", password: "Hh223344@", tfaCode: "111111"}
            }),
            async onQueryStarted(body, { dispatch, queryFulfilled }) {
                // `onStart` side-effect
                dispatch(setMessage('Loading...'))
                console.log(body)
                try {
                    const { data } = await queryFulfilled
                    // `onSuccess` side-effect
                    dispatch(updateAuth(data.data.token.accessToken))
                    dispatch(submitSuccess(data.msg))
                } catch (err) {
                    // `onError` side-effect
                    dispatch(setMessage(error.data.msg))
                }
            },
        })
    }),
    overrideExisting: true,
})

export const { useLoginMutation } = loginApi

import { handleJob } from "@/Store/Market"

export default build =>
    build.query({
        query: (date) => `admin/account-signal?page=1&limit=10000&day=${date}`,
        async onQueryStarted(date, { dispatch, queryFulfilled }) {
            // `onStart` side-effect
            // dispatch(setMessage('Loading...'))
            try {
                const { data } = await queryFulfilled
                // `onSuccess` side-effect
                dispatch(handleJob({data: data.data, date}))
            } catch (err) {
                // `onError` side-effect
                // dispatch(setMessage(error.data.msg))
            }
        },
    })
export default build =>
    build.query({
        query: (date) => `admin/account-signal/not-in-job?page=1&limit=10000&day=${date}`
    })
export default build => 
    build.query({
        query: ({page = 1, limit = 1000}) => ({
            url: 'admin/job-setting/history',
            method: 'GET',
            params: {page, limit}
        }),
    })
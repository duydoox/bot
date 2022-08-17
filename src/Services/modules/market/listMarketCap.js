export default build =>
  build.query({
    query: () => `admin/job-setting/list-market-cap?page=1&limit=10000&second=3600`,
  })
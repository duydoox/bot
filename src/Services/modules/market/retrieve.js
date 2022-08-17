export default build =>
  build.query({
    query: () => `admin/job-setting/retrieve`,
  })
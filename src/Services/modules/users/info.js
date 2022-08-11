export default build =>
  build.query({
    query: () => `admin/account/info`,
  })
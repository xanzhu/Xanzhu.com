export default defineEventHandler((event) => {
  setResponseHeader(event, 'Cache-Control', 'no-store')
  return 'OK'
})

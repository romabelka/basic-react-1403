import md5 from 'js-md5'
export default (store) => (next) => (action) => {
  const id = md5(Date.now().toString())
  console.log('---', 'id:', id)
  next(action)
}

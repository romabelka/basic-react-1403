export default (store) => (next) => (action) => {
  const uuidv4 = require('uuid/v4')
  const id = uuidv4()
  console.log(`new id: ${id}`)
  next(action)
}

export default (store) => (next) => (action) => {
  function randomID() {
    let ID = ''
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < 10; i++)
      ID += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))

    return ID
  }
  const ID = randomID()
  next((action.commentID = ID))
  console.log('---', 'random ID', ID)
  console.log('---', 'action parameters', action.user, '  ', action.text)
}

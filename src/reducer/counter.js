export default (count = 10, action) => (action.type === 'increment' ? count + 1 : count)

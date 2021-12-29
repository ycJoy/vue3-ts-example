// visibility filters
export default function filters () {
  const all = (todos) => {
    return todos
  }
  const active = (todos) => {
    return todos.filter((todo) => {
      return !todo.completed
    })
  }
  const completed = (todos) => {
    return todos.filter((todo) => {
      return todo.completed
    })
  }

  return {
    all,
    active,
    completed
  }
}

// localStorage persistence
import { ref } from 'vue'

const STORAGE_KEY = 'todos-vuejs-3.0'
export default function todoStorage () {
  const uid = ref()
  const fetch = () => {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index:number) {
      todo.id = index
    })
    uid.value = todos.length
    return todos
  }
  const save = (todos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }

  return {
    fetch,
    save,
    uid
  }
}

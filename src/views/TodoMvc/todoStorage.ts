// localStorage persistence
import { ref, Ref } from 'vue'
export interface todoType {
  id: number;
  title: string;
  completed: boolean;
}
export interface storageFunType {
  fetch: () => todoType[];
  save: (todos:todoType[]) => void;
  uid: Ref<number>;
}

const STORAGE_KEY = 'todos-vuejs-3.0'
export function todoStorageFun ():storageFunType {
  const uid = ref(0)
  const fetch = () => {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo: todoType, index:number) {
      todo.id = index
    })
    uid.value = todos.length
    return todos
  }
  const save = (todos:todoType[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }

  return {
    fetch,
    save,
    uid
  }
}

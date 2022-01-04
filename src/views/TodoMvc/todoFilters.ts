// visibility filters
import { todoType } from './todoStorage'
export interface filtersType {
  all: (todos:todoType[]) => todoType[];
  active: (todos:todoType[]) => todoType[];
  completed: (todos:todoType[]) => todoType[];
}

export default function filters ():filtersType {
  const all = (todos:todoType[]) => {
    return todos
  }
  const active = (todos:todoType[]) => {
    return todos.filter((todo:todoType) => {
      return !todo.completed
    })
  }
  const completed = (todos:todoType[]) => {
    return todos.filter((todo:todoType) => {
      return todo.completed
    })
  }

  return {
    all,
    active,
    completed
  }
}

export type Todo = {
  id: string
  text: string
  checked: boolean
  color: string
  emoji: string
}

export type TodoState = {
  data: Todo[] | null
  error: string | null
}

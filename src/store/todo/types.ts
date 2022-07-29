export type Todo = {
  id: string
  text: string
  checked: boolean
  color: string
  emoji: string
}

export type TodoInitialState = {
  data: Todo[]
  error: string
  status: string
}

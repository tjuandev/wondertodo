import { dbClient } from 'infra/http/dbClient'
import { useTodo } from 'infra/store/todo'
import { useCallback, useState } from 'react'

const useGetAllTodos = () => {
  const [loading, setLoading] = useState(false)
  const { todo, setTodos } = useTodo()

  const getAllTodos = useCallback(
    async (table: string) => {
      setLoading(true)

      const { data, error } = await dbClient.from(table).select()

      setTodos({
        data,
        error: error && error?.message
      })

      setLoading(false)
    },
    [setTodos]
  )

  return {
    todo,
    loading,
    getAllTodos
  }
}

export default useGetAllTodos

import { useCallback, useState } from 'react'
import { UseCustomRequestReturn, CustomRequest } from './types'

export default function useFetch(
  customRequest: CustomRequest
): UseCustomRequestReturn {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetch = useCallback(async () => {
    setLoading(true)

    try {
      const data = await customRequest()

      setData(data)
    } catch (error: any) {
      setError(error.message)
    }

    setLoading(false)
  }, [customRequest])

  return {
    data,
    loading,
    error,
    fetch
  }
}

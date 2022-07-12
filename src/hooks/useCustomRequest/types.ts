export type CustomRequest = () => Promise<any>

export type UseCustomRequestReturn = {
  data: any | null
  loading: boolean
  error: string | null
  fetch: () => void
}

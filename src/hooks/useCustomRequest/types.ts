export type CustomRequest = () => Promise<any>

export type UseCustomRequestReturn = {
  data: Record<string, unknown> | null
  loading: boolean
  error: string | null
  fetch: () => void
}

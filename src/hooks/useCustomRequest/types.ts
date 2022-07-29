export type ObjectType = { [key: string]: any }

export type CustomRequest = (params: ObjectType) => Promise<any>

export type UseCustomRequestReturn = {
  data: Record<string, unknown> | null
  loading: boolean
  error: string | null
  fetch: (params: ObjectType) => void
}

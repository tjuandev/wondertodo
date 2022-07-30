import { dbClient } from 'infra/http/dbClient'
import { MatchQuery, SupabaseData } from './types'

const useDatabase = () => ({
  read: async <Type>(table: string, columnQuery?: string) => {
    return await dbClient.from<Type>(table).select(columnQuery)
  },
  create: async <Type>(table: string, data: SupabaseData) => {
    return await dbClient.from<Type>(table).insert(data)
  },
  update: async <Type>(
    table: string,
    data: SupabaseData,
    matchQuery: MatchQuery
  ) => {
    return await dbClient.from<Type>(table).update(data).match(matchQuery)
  }
})

export default useDatabase

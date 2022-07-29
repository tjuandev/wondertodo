import { supabase } from 'services/supabase'
import { MatchQuery, SupabaseData } from './types'

const useDatabase = () => ({
  read: async <Type>(table: string, columnQuery?: string) => {
    return await supabase.from<Type>(table).select(columnQuery)
  },
  create: async <Type>(table: string, data: SupabaseData) => {
    return await supabase.from<Type>(table).insert(data)
  },
  update: async <Type>(
    table: string,
    data: SupabaseData,
    matchQuery: MatchQuery
  ) => {
    return await supabase.from<Type>(table).update(data).match(matchQuery)
  }
})

export default useDatabase

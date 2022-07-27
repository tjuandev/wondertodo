import { supabase } from 'services/supabase'
import { MatchQuery, SupabaseData } from './types'

const useDatabase = () => ({
  read: async (table: string, columnQuery?: string) => {
    return await supabase.from(table).select(columnQuery)
  },
  create: async (table: string, data: SupabaseData) => {
    return await supabase.from(table).insert(data)
  },
  update: async (table: string, data: SupabaseData, matchQuery: MatchQuery) => {
    return await supabase.from(table).update(data).match(matchQuery)
  }
})

export default useDatabase

import { dbClient } from 'infra/adapters'

const getAllFromTable = async (table: string) => {
  const { data, error } = await dbClient.from(table).select()

  return {
    data,
    error: error && error.message
  }
}

export default getAllFromTable

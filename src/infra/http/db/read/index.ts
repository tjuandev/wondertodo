import { dbClient } from 'infra/adapters'

export const getAllFromTable = async (table: string) => {
  const response = await dbClient.from(table).select()

  return response
}

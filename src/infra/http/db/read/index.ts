import { dbClient } from 'infra/adapters'

export const getAllFromTable = async <Type>(table: string) => {
  const response = await dbClient.from<Type>(table).select()

  return response
}

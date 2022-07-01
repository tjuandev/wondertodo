import { Container } from './Stylesheet'
import { SimpleTabProps } from './types'

const SimpleTab = ({ name, active = false }: SimpleTabProps) => {
  return <Container active={active}>{name}</Container>
}

export default SimpleTab

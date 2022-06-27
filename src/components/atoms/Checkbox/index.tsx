import Checked from 'assets/icons/Checked'
import { Button } from './Stylesheet'

type CheckboxProps = {
  checked: boolean
  color: string
  onClick: () => void
}

const Checkbox = (props: CheckboxProps) => {
  const { color } = props

  return (
    <Button {...props}>
      <Checked color={color} />
    </Button>
  )
}

export default Checkbox

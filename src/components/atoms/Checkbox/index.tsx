import Checked from 'assets/icons/Checked'
import { Button } from './Stylesheet'

type CheckboxProps = {
  checked: boolean
  color: string
  onClick: () => void
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <Button {...props}>
      <Checked />
    </Button>
  )
}

export default Checkbox

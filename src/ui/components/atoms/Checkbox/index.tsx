import Checked from 'ui/assets/icons/Checked'
import { Button } from './Stylesheet'

import { CheckboxProps } from './types'

const Checkbox = (props: CheckboxProps) => {
  const { color } = props

  return (
    <Button {...props}>
      <Checked color={color} />
    </Button>
  )
}

export default Checkbox

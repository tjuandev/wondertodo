import { LabelWrapper } from './Stylesheet'

type LabelProps = { text: string }

const Label = ({ text }: LabelProps) => {
  return <LabelWrapper>{text}</LabelWrapper>
}

export default Label

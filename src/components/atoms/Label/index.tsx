import { LabelWrapper } from './Stylesheet'

type LabelProps = { text: string }

export const Label = ({ text }: LabelProps) => {
  return <LabelWrapper>{text}</LabelWrapper>
}

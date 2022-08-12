import { InputHTMLAttributes, ReactElement } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  color?: string
}

export type InputToggleProps = {
  text: string
  keyUps?: string[]
  inputProps?: InputProps
  EndInputElements?: ReactElement | ReactElement[]
  onSubmit: (inputValue: string) => void
}

export type KeyUpLabelsProps = Pick<InputToggleProps, 'keyUps'>

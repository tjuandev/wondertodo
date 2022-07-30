import { FormEvent, InputHTMLAttributes, ReactElement } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  color?: string
}

export type InputToggleProps = {
  text: string
  keyUps?: string[]
  inputProps?: InputProps
  EndInputElements?: ReactElement | ReactElement[]
  onSubmit: (e: FormEvent) => void
}

export type KeyUpLabelsProps = Pick<InputToggleProps, 'keyUps'>

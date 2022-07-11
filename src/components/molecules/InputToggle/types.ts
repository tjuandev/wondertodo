import { FormEvent, ReactElement } from 'react'

export type InputToggleProps = {
  text: string
  keyUps?: string[]
  inputProps?: Partial<HTMLInputElement> & {
    color?: string
  }
  EndInputElements?: ReactElement | ReactElement[]
  onSubmit: (e: FormEvent) => void
}

export type InputProps = {
  color?: string
  [x: string]: any
}

export type KeyUpLabelsProps = Pick<InputToggleProps, 'keyUps'>

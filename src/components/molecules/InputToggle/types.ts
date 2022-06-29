export type InputToggleProps = {
  text: string
  keyUps?: string[]
  inputProps?: Partial<HTMLInputElement> & {
    color?: string
  }
}

export type InputProps = {
  color?: string
  [x: string]: any
}

export type KeyUpLabelsProps = Pick<InputToggleProps, 'keyUps'>

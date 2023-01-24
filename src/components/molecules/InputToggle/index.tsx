import { useState } from 'react'

import { KeyUpLabel } from 'components/atoms'

import {
  CreateButtonWrapper,
  EndElementsContainer,
  Input,
  InputForm,
  Wrapper
} from './Stylesheet'
import { InputToggleProps, KeyUpLabelsProps } from './types'

const KeyUpLabels = ({ keyUps }: KeyUpLabelsProps) => (
  <>
    {keyUps && (
      <div>
        {keyUps.map(key => (
          <KeyUpLabel key={key} text={key} />
        ))}
      </div>
    )}
  </>
)

const InputToggle = ({
  text,
  keyUps,
  inputProps,
  EndInputElements,
  onSubmit
}: InputToggleProps) => {
  const [inputMode, setInputMode] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const toggleInputMode = () => {
    setInputMode(!inputMode)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Wrapper>
      {inputMode ? (
        <InputForm
          onSubmit={e => {
            e.preventDefault()
            onSubmit(inputValue)
            setInputMode(false)
          }}
        >
          <Input onChange={onChange} {...inputProps} />
          <EndElementsContainer>{EndInputElements}</EndElementsContainer>
        </InputForm>
      ) : (
        <CreateButtonWrapper>
          <button onClick={toggleInputMode}>{text}</button>
          <KeyUpLabels keyUps={keyUps} />
        </CreateButtonWrapper>
      )}
    </Wrapper>
  )
}

export default InputToggle

import { useState } from 'react'

import { KeyUpLabel } from 'components/atoms'

import {
  CreateButtonWrapper,
  EndElementsContainer,
  Input,
  InputContainer,
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

  const toggleInputMode = () => {
    setInputMode(!inputMode)
  }

  return (
    <Wrapper>
      {inputMode ? (
        <InputContainer
          onSubmit={e => {
            e.preventDefault()
            onSubmit(e)
            setInputMode(false)
          }}
        >
          <Input {...inputProps} />
          <EndElementsContainer>{EndInputElements}</EndElementsContainer>
        </InputContainer>
      ) : (
        <CreateButtonWrapper>
          <button onClick={toggleInputMode}>
            <p>{text}</p>
          </button>
          <KeyUpLabels keyUps={keyUps} />
        </CreateButtonWrapper>
      )}
    </Wrapper>
  )
}

export default InputToggle

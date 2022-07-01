import { useState } from 'react'

import { KeyUpLabel } from 'components/atoms'

import { CreateButtonWrapper, Input, Wrapper } from './Stylesheet'
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

const InputToggle = ({ text, keyUps, inputProps }: InputToggleProps) => {
  const [inputMode, setInputMode] = useState(false)

  const toggleInputMode = () => {
    setInputMode(!inputMode)
  }

  return (
    <Wrapper>
      {inputMode ? (
        <Input {...inputProps} />
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

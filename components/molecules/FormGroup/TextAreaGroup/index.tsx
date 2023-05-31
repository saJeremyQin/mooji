import TextArea, { TextAreaProps } from 'components/atoms/Form/Textarea'
import Label from 'components/atoms/Label'
import { useEffect, useState } from 'react'
import randomString from 'utils/randomString'

interface TextAreaGroupProps extends TextAreaProps {
  label: string,
  value?: string
}
const TextAreaGroup = ({
  label,
  // defaultValue,
  value,
  onChange,
  onSubmit,
  required,
  rows,
  placeholder,
}: TextAreaGroupProps) => {
  const [randomId, setRandomId] = useState<string>('')
  useEffect(() => {
    setRandomId(randomString(64)) 
  }, [])
  return (
    <div className="space-y-1.5">
      <Label label={label} htmlFor={randomId} />
      <TextArea
        // defaultValue={defaultValue}
        value={value}
        id={randomId}
        onChange={onChange}
        onSubmit={onSubmit}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
    </div>
  )
}

export default TextAreaGroup

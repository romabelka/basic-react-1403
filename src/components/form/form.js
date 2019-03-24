import React, { useState } from 'react'
import pt from 'prop-types'

const isRequired = (value) => !value.length
const maxLength = (maxLength) => (value) => value.length > maxLength

const validators = {
  text: [isRequired],
  user: [isRequired, maxLength(20)]
}

const checkErrors = (values) => {
  const errors = { text: false, user: false }

  Object.keys(validators).forEach((fieldName) => {
    validators[fieldName].forEach((checkError) => {
      if (checkError(values[fieldName])) {
        errors[fieldName] = true
      }
    })
  })

  return errors
}

const hasErrors = (errors) => Object.keys(errors).some((field) => errors[field])

function Form({ onSubmit }) {
  const [values, setValues] = useState({ text: '', user: '' })
  const [errors, setErrors] = useState({ text: false, user: false })

  const handleInputChange = (handler, field) => ({ target: { value } }) =>
    handler({ ...values, [field]: value })
  const handleClick = (event) => {
    event.preventDefault()

    const formErrors = checkErrors(values)

    if (hasErrors(formErrors)) {
      setErrors(formErrors)
      return
    }

    return onSubmit({
      ...values,
      id: +Date.now()
    })
  }

  return (
    <div>
      <form>
        User:
        <div>
          <input value={values.user} onChange={handleInputChange(setValues, 'user')} />
          {errors.user && <div>Поле заполнено неверно!</div>}
        </div>
        Comment:
        <div>
          <input value={values.text} onChange={handleInputChange(setValues, 'text')} />
          {errors.text && <div>Поле заполнено неверно!</div>}
        </div>
        <button type="submit" onClick={handleClick}>
          Add comment
        </button>
      </form>
    </div>
  )
}

Form.propTypes = { onSubmit: pt.func.isRequired }

export default Form

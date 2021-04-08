import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles';
import {SubmitButton} from "../SubmitButton"

export const UserForm = ({disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (email.value.length > 0 && password.value.length > 0)
    {
      onSubmit({
        email: email.value,
        password: password.value
      })
    }
    else {
      disabled = true;
    }
  }

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )
}

import React from 'react'

const CommanInput = (name, type, value, onChange, placeholder) => {

  return (
    <input value={value} type={type} placeholder={placeholder} name={name} onChange={onChange} />
  )
}

export default CommanInput

import React, { useState } from 'react'

const Input = () => {
  const [error, setError] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const { target: { value }} = e;
    if(!value) {
      setError(true)
    }
  }

  return (
    <div className={`input_container${error ? ' has-error': ''}`} onBlur={() => setError(false)}>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Please enter a valid Url'/>
      </form>
    </div>
  )
}

export default Input

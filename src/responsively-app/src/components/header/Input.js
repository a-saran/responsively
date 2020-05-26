import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import isUrl from "is-url";
import { SET_LINK } from '../../actions/types';
import { SendArrow } from '../icons/index';

const Input = () => {
  const [error, setError] = useState(false)
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value;

    if(!value.length) {
      setError(true)
    }

    if(isUrl(value)) {
      dispatch({ type:SET_LINK, payload: { link: value} })
    } else {
      setError(true)
    }
  }

  return (
    <div className={`input_container${error ? ' has-error': ''}`} onBlur={() => setError(false)}>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Please enter a valid Url' ref={inputRef}/>
        <button>
          <SendArrow />
        </button>
      </form>
    </div>
  )
}

export default Input

import { useCallback, useRef } from "react";


export const validateForm = (values) => {
    const errors = [];
    const emailValid = /^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/gi.test(values?.email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values?.password)
    if(!emailValid){
      errors.push('Email')
    }
    if (isPasswordValid){
      errors.push('Password')
    }
    return errors
  }

export const useDebounceHandleChange = (func, delay) => {
let timerId = useRef(0);
  return useCallback((...args) => {
    if (timerId.current){
      clearTimeout(timerId)
    }
    timerId.current = setTimeout(() => {
      func(...args)
    }, delay);
  }, [func,delay])
}
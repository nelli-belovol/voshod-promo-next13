import React, { ForwardedRef, forwardRef } from 'react'
import { InputProps } from './Input.props'
import cn from 'classnames'
import styles from './Input.module.scss'

export const Input = forwardRef(function InputComponent(
  { className, error, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
): JSX.Element {
  return (
    <div className={cn(styles.inputWrapper, className)}>
      <input
        className={cn(styles.input, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && (
        <span role="alert" className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  )
})

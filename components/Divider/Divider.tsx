import React from 'react'
import styles from './Divider.module.scss'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface DividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Divider = ({ className, ...props }: DividerProps) => {
  return <div className={classNames(styles.divider, className)} {...props} />
}

export default Divider

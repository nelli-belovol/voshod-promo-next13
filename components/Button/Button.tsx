'use client'

import Image from 'next/image'
import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

interface Props
  extends Omit<
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
  > {
  color: 'white' | 'red' | 'black' | 'transparent'
  borderColor: 'red' | 'black' | 'white'
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  children: ReactNode
}

const Button = ({ color, borderColor, icon: Icon, children, className, ...props }: Props) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.red]: color == 'red',
        [styles.black]: color == 'black',
        [styles.white]: color == 'white',
        [styles.transparent]: color == 'transparent',
        [styles.borderRed]: (borderColor = 'red'),
        [styles.borderBlack]: (borderColor = 'black'),
        [styles.borderWhite]: (borderColor = 'white'),
      })}
      {...props}
    >
      <span> {children}</span>
      {Icon && <Icon stroke="white" />}
    </button>
  )
}

export default Button

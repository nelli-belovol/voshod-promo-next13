'use client'

import Image from 'next/image'
import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

type Props = {
  color: 'white' | 'red' | 'black' | 'transparent'
  text: string
  onClick: () => void
  borderColor: 'red' | 'black' | 'white'
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
}

const Button = ({ color, onClick, text, borderColor, icon: Icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.button, {
        [styles.red]: color == 'red',
        [styles.black]: color == 'black',
        [styles.white]: color == 'white',
        [styles.transparent]: color == 'transparent',
        [styles.borderRed]: (borderColor = 'red'),
        [styles.borderBlack]: (borderColor = 'black'),
        [styles.borderWhite]: (borderColor = 'white'),
      })}
    >
      <span>{text}</span>
      {Icon && <Icon stroke="white" />}
    </button>
  )
}

export default Button

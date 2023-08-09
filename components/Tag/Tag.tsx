import React from 'react'

import cn from 'classnames'
import styles from './Tag.module.scss'

type TagStyleType = 'standart' | 'free' | 'busy' | 'All' | 'filter'
type Props = {
  tagStyle?: TagStyleType
  text: string
}

export const Tag = ({ tagStyle = 'standart', text }: Props): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.standart]: tagStyle == 'standart',
        [styles.free]: tagStyle == 'free',
        [styles.busy]: tagStyle == 'busy',
        [styles.all]: tagStyle == 'All',
        [styles.filter]: tagStyle == 'filter',
      })}
    >
      {text}
    </div>
  )
}

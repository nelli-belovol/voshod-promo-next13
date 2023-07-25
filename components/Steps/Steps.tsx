'use client'

import React from 'react'
import VectorSvg from '@/assets/icons/vector.svg'
import styles from './Steps.module.scss'
import cn from 'classnames'

const steps = [
  { step: 1, title: 'Выбрать автомобиль', label: 'Выберите автомобиль из нашего каталога или предложите свой вариант' },
  { step: 2, title: 'Обратиться к нам', label: 'Обратитесь к нам в любое удобное для вас время' },
  { step: 3, title: 'заключить договор', label: 'Договор заключается в течении одного дня' },
]

const Steps = () => {
  return (
    <ul className={cn('section', styles.stepsWrap)}>
      {steps.map(step => (
        <li key={step.step}>
          <h3>
            <span>{step.title}</span>
            <span className={styles.step}>0{step.step}</span>
          </h3>
          <VectorSvg />
          <p>{step.label}</p>
        </li>
      ))}
    </ul>
  )
}

export default Steps

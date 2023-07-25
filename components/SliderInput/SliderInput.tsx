'use client'

import React, { useState } from 'react'
import styles from './SliderInput.module.scss'
import { formatNumberWithRubles } from '@/helpers/formatNumberWithRubles'

type Props = {
  label: string
  min: number
  max: number
  step: number
}

const SliderInput = ({ label, min, max, step }: Props) => {
  const [sliderValue, setSliderValue] = useState(0)

  const handleChange = (event: { target: { value: any } }) => {
    setSliderValue(Number(event.target.value))
  }
  const progressStyle = {
    background: `linear-gradient(to right, #BF3535 ${((sliderValue - min) / (max - min)) * 100}%, #FFF 0%)`,
  }

  return (
    <div className={styles.inputWrap}>
      <div className={styles.inputHeader}>
        <label className={styles.inputLabel}>{label}</label>
        <span>
          {formatNumberWithRubles(sliderValue)} {label === 'Срок' ? 'мес' : '₽'}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        className={styles.inputProgress}
        style={progressStyle}
      />
    </div>
  )
}

export default SliderInput

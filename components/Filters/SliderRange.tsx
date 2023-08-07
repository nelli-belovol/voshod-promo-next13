'use client'

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  useRangeSlider,
} from '@chakra-ui/react'
import React, { useState } from 'react'

import styles from './SliderRange.module.scss'

type SliderRangeProps = {
  min: number
  max: number
  setPriceRange: (values: number[]) => void //
}

const SliderRange = ({ min, max, setPriceRange }: SliderRangeProps) => {
  return (
    <div style={{ width: '100%' }}>
      <RangeSlider
        aria-label={['min', 'max']}
        onChangeEnd={val => setPriceRange(val)}
        defaultValue={[600000, 800000]}
        min={500000}
        max={1000000}
        step={10000}
        value={[min, max]}
      >
        <RangeSliderTrack className={styles.input}>
          <RangeSliderFilledTrack bg="#BF3535" height={'6px'} />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={15} index={0} bg={'#BF3535'} className={styles.slider} />
        <RangeSliderThumb boxSize={15} index={1} bg={'#BF3535'} className={styles.slider} />
      </RangeSlider>
    </div>
  )
}

export default SliderRange

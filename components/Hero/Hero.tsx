import React from 'react'
import Image from 'next/image'
import styles from './Hero.module.scss'
import cn from 'classnames'
import SliderInput from '@/components/SliderInput/SliderInput'

const Hero = () => {
  return (
    <div className={cn(styles.heroWrap, 'section')}>
      <h1>Как кредит</h1>
      <span>Только проще</span>
      <div className={styles.calculationWrap}>
        <SliderInput label="Стоимость автомобиля" max={9000000} min={1500000} step={2500} />
        <SliderInput label="Первый взнос" max={900000} min={500000} step={2500} />
        <SliderInput label="Срок" max={120} min={1} step={1} />
      </div>
      <p>
        Стоимость предмета лизинга и приведенные расчеты через калькулятор являются предварительными. Для точного
        определения процентной ставки по договору, пожалуйста, обратитесь к менеджеру.
      </p>
    </div>
  )
}

export default Hero

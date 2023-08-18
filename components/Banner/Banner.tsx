import React from 'react'
import styles from './Banner.module.scss'
import Button from '../Button/Button'
import useLoginModal from '@/hooks/useLoginModal'

const Banner = () => {
  const handleClick = () => {}

  return (
    <div className={styles.bannerWrap}>
      <h4>Не нашли ничего подходящего?</h4>
      <div className={styles.actionBlock}>
        <h3>Предложите свой вариант!</h3>
        <Button borderColor="white" color="transparent" onClick={handleClick}>
          Оставить заявку
        </Button>
      </div>
    </div>
  )
}

export default Banner

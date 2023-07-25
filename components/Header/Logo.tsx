import React from 'react'
import Image from 'next/image'
import LogoSvg from '@/assets/icons/logo.svg'
import NameSvg from '@/assets/icons/logoName.svg'
import styles from './logoStyles.module.scss'

const Logo = () => {
  return (
    <div className={styles.logoWrap}>
      <LogoSvg className={styles.logo} fill="white" />
      <NameSvg className={styles.logoName} fill="white" />
      <span className={styles.logoLabel}>Доступные автомобили</span>
    </div>
  )
}

export default Logo

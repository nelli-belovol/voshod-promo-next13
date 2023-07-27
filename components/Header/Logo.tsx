import React from 'react'
import Image from 'next/image'
import LogoSvg from '@/assets/icons/logo.svg'
import NameSvg from '@/assets/icons/logoName.svg'
import styles from './logoStyles.module.scss'

interface LogoProps {
  styleColor: 'light' | 'dark' // Assuming 'light' or 'dark' style is used
}

const Logo: React.FC<LogoProps> = ({ styleColor }) => {
  return (
    <div className={styles.logoWrap}>
      <LogoSvg className={styles.logo} fill={styleColor === 'light' ? 'white' : '#222222'} />
      <NameSvg className={styles.logoName} fill={styleColor === 'light' ? 'white' : '#222222'} />
      <span className={styles.logoLabel} style={{ color: styleColor === 'light' ? 'white' : '#222222' }}>
        Доступные автомобили
      </span>
    </div>
  )
}

export default Logo

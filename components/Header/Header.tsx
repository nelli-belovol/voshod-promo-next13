'use client'

import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import styles from './HeaderStyles.module.scss'
import ProfileCallButtonContainer from './ProfileCallButtonContainer'

const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/programs', label: 'Программы' },
  { href: '/questions', label: 'Вопросы' },
  { href: '/rent', label: 'Аренда' },
  { href: '/contacts', label: 'Контакты' },
]

const Header = () => {
  return (
    <div className={styles.headerWrap}>
      <Logo />
      <Navigation navLinks={navItems} />
      <ProfileCallButtonContainer />
    </div>
  )
}

export default Header

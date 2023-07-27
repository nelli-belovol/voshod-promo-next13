'use client'

import React, { useEffect, useState } from 'react'
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
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={styles.headerWrap}
      style={{
        background: scrolling ? 'white' : 'transparent',
        boxShadow: scrolling ? '0px 5px 20px 0px rgba(0, 0, 0, 0.07)' : 'none',
      }}
    >
      <Logo styleColor={scrolling ? 'dark' : 'light'} />
      <Navigation navLinks={navItems} styleColor={scrolling ? 'dark' : 'light'} />
      <ProfileCallButtonContainer styleColor={scrolling ? 'dark' : 'light'} />
    </div>
  )
}

export default Header

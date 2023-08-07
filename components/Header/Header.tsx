'use client'

import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import styles from './HeaderStyles.module.scss'
import ProfileCallButtonContainer from './ProfileCallButtonContainer'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/catalogue', label: 'Каталог' },
  { href: '/programs', label: 'Программы' },
  { href: '/questions', label: 'Вопросы' },
  { href: '/rent', label: 'Аренда' },
  { href: '/contacts', label: 'Контакты' },
]

const Header = () => {
  const pathname = usePathname();
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
        background: pathname !== "/" || scrolling ? 'white' : 'transparent',
        boxShadow: pathname !== "/" || scrolling ? '0px 5px 20px 0px rgba(0, 0, 0, 0.07)' : 'none',
      }}
    >
      <Logo styleColor={pathname !== "/" || scrolling ? 'dark' : 'light'} />
      <Navigation navLinks={navItems} styleColor={pathname !== "/" || scrolling ? 'dark' : 'light'} />
      <ProfileCallButtonContainer styleColor={pathname !== "/" || scrolling ? 'dark' : 'light'} />
    </div>
  )
}

export default Header

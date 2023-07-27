'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.scss'

type NavLink = {
  label: string
  href: string
}

type Props = {
  navLinks: NavLink[]
  styleColor: 'light' | 'dark' // Assuming 'light' or 'dark' style is used
}

const Navigation = ({ navLinks, styleColor }: Props) => {
  const pathname = usePathname()

  return (
    <div className={styles.navigation}>
      {navLinks.map(link => {
        const isActive = pathname === link.href
        return (
          <Link
            style={{ color: styleColor === 'light' ? 'white' : '#222222' }}
            href={link.href}
            key={link.label}
            className={isActive ? styles.activeLink : styles.link}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}

export default Navigation

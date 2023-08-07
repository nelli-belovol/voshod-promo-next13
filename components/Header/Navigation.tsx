'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.scss'
import classNames from 'classnames'

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
            style={{ color: isActive ? "#bf3535" : styleColor === 'dark' ? "#222222" : "white" }}
            href={link.href}
            key={link.label}
            className={classNames(styles.link)}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}

export default Navigation

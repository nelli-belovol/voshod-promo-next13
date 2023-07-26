'use client'

import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { format } from 'date-fns'

const Footer = () => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div
      className={styles.footer}
      style={{ width: pathname === '/' ? '43%' : '100%', paddingLeft: pathname === '/' ? '160px' : '0px' }}
    >
      <p>
        <span className={styles.name}>ООО Восход</span> ©{format(new Date(), 'yyyy')} год
      </p>

      <div className={styles.links}>
        <Link href={'#'} className={styles.linkUnderscore}>
          Оферта
        </Link>
        <Link href={'#'} className={styles.linkUnderscore}>
          Политика конфиденциальности
        </Link>
      </div>
    </div>
  )
}

export default Footer

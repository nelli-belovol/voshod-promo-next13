import React from 'react'
import styles from './Notification.module.scss'
import AlertSvg from '@/assets/icons/Alert.svg'
import Link from 'next/link'
import CloseFillSvg from '@/assets/icons/closeFill.svg'

const Notification = () => {
  return (
    <div className={styles.notificationWrap}>
      <AlertSvg />
      <p>
        В каталоге представлены автомобили, которые проходят по программам лизинга. Если Вам необходим автомобиль в
        аренду перейдите в раздел<Link href="/rent"> Аренда</Link>.
      </p>
      <CloseFillSvg className={styles.closeIcon} />
    </div>
  )
}

export default Notification

'use client'

import React from 'react'

import styles from './Contacts.module.scss'
import classNames from 'classnames'
import Map from '@/components/Map/Map'
import GeolacationSvg from '@/assets/icons/geolocation.svg'
import TimeSvg from '@/assets/icons/clock.svg'
import PhoneSvg from '@/assets/icons/phone.svg'
import VkSvg from '@/assets/icons/vk.svg'
import WhatsApp from '@/assets/icons/whatsapp.svg'
import TelegramSvg from '@/assets/icons/telegram.svg'

const Contacts = () => {
  return (
    <div className={classNames(styles.contactsWrap)}>
      <div className={styles.contactBlock}>
        <h2>Контакты</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactInfoBlock}>
            <div className={styles.contactInfoHeader}>
              <GeolacationSvg />
              <h3>Адрес</h3>
            </div>
            <p>Санкт-Петербург</p>
            <p>Торфяная дорога 7Ф</p>
            <p>БЦ «Гулливер» 2 оф. 104</p>
          </div>

          <div className={styles.contactInfoBlock}>
            <div className={styles.contactInfoHeader}>
              {' '}
              <TimeSvg />
              <h3>Время работы</h3>
            </div>

            <p>пн-вс: с 10.00 - 19.00</p>
          </div>

          <div className={styles.contactInfoBlock}>
            <div className={styles.contactInfoHeader}>
              {' '}
              <PhoneSvg />
              <h3>Телефон</h3>
            </div>

            <p>+7 (812) 317-68-15</p>
          </div>
        </div>

        <div className={styles.socials}>
          <VkSvg />
          <WhatsApp />
          <TelegramSvg />
        </div>
      </div>
      <Map />
    </div>
  )
}

export default Contacts

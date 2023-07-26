'use client'

import React from 'react'
import CarCard from '../CarCard/CarCard'
import cars from '@/db/cars.json'
import classNames from 'classnames'
import styles from './Offers.module.scss'
import Link from 'next/link'
import LongArrowSvg from '@/assets/icons/longArrow.svg'
import cheryLogo from '@/assets/images/cheryLogo.png'
import geelyLogo from '@/assets/images/geelyLogo.png'
import kiaLogo from '@/assets/images/kiaLogo.png'
import bmwLogo from '@/assets/images/bmwLogo.png'
import hyundaiLogo from '@/assets/images/hyundaiLogo.png'
import vwLogo from '@/assets/images/vwLogo.png'
import Image from 'next/image'

const Offers = () => {
  return (
    <div className={classNames('section', styles.offersWrap)}>
      {' '}
      <div className={styles.offerHeader}>
        {' '}
        <h2>выгодные предложения </h2>
        <Link href={'#'}>
          Другие предложения <LongArrowSvg />
        </Link>
      </div>
      <ul className={styles.carList}>
        {cars.map(car => {
          const buyingTags = car.tagCategories.find(cat => cat.categoryName === 'buying')
          return (
            <li key={car.id}>
              <CarCard
                name={car.name}
                text1="Минимальный платёж"
                text2="Цена"
                addLinkText="Посмотреть похожие модели"
                tags={buyingTags ? buyingTags.tags : []}
                price={car.price}
              />
            </li>
          )
        })}
      </ul>
      <ul className={styles.logoList}>
        <li style={{ width: '168px', height: '80px' }}>
          <Image src={cheryLogo} alt="cherylogo" />
        </li>

        <li style={{ width: '173px', height: '40px' }}>
          <Image src={kiaLogo} alt="kiaLogo" />
        </li>
        <li style={{ width: '147px', height: '80px' }}>
          <Image src={geelyLogo} alt="geelyLogo" />
        </li>
        <li style={{ width: '80px', height: '80px' }}>
          <Image src={bmwLogo} alt="bmwLogo" />
        </li>
        <li style={{ width: '166px', height: '80px' }}>
          <Image src={hyundaiLogo} alt="hyundaiLogo" />
        </li>
        <li style={{ width: '80px', height: '80px' }}>
          <Image src={vwLogo} alt="vwLogo" />
        </li>
      </ul>
    </div>
  )
}

export default Offers

import React from 'react'
import styles from './CarCard.module.scss'
import { Tag } from '../Tag/Tag'
import img1 from '@/assets/images/toyotaCamry.png'
import Image from 'next/image'
import LittleArrowSvg from '@/assets/icons/littleArrow.svg'
import { formatNumberWithRubles } from '@/helpers/formatNumberWithRubles'
import Button from '../Button/Button'
import Link from 'next/link'

type Props = {
  name: string
  code?: string
  text1: 'Минимальный платёж' | 'Аренда'
  text2: 'Цена' | 'Депозит'
  addLinkText?: string

  price: number
  tags: string[]
}

const CarCard = ({ name, code, text1, text2, addLinkText, tags, price }: Props) => {
  const names = name.split(' ')
  const minPay = 6950

  const handleReservate = () => {}
  return (
    <div className={styles.cardWrap}>
      <div className={styles.tagList}> {tags && tags.map((tag, idx) => <Tag text={tag} key={idx} />)}</div>

      <Image alt={code ?? name} src={img1} width={286} height={148} className={styles.carImage} />

      <div className={styles.info}>
        <h4>
          {names[0]}
          <span> {names[1]}</span>
        </h4>
        <p>{text1}</p>
        <span className={styles.text1}>{formatNumberWithRubles(minPay)} ₽</span>
        <p className={styles.price}>
          {text2}
          <span> от {formatNumberWithRubles(price)} ₽</span>
        </p>

        {addLinkText && (
          <Link href={'#'} className={styles.addLink}>
            {addLinkText}
            <LittleArrowSvg />
          </Link>
        )}
      </div>

      <Button borderColor="red" color="white" onClick={handleReservate} text="Забронировать" />
    </div>
  )
}

export default CarCard

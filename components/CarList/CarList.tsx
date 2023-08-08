import React from 'react'
import cars from '@/db/cars.json'
import CarCard from '../CarCard/CarCard'
import styles from './CarList.module.scss'
import Notification from '../Notification/Notification'

const CarList = () => {
  return (
    <div style={{ width: '100%' }}>
      <Notification />
      <ul className={styles.carList}>
        {cars.map(car => {
          const tags = car.tagCategories.reduce((allTags, category) => allTags.concat(category.tags), [] as string[])

          return (
            <li key={car.id}>
              <CarCard name={car.name} text1={'Минимальный платёж'} text2={'Цена'} price={car.price} tags={tags} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CarList

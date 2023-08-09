import React, { useState, useEffect, useCallback } from 'react'
import carsBd from '@/db/cars.json'
import CarCard from '../CarCard/CarCard'
import styles from './CarList.module.scss'
import Banner from '../Banner/Banner'
import PaginationButtons from './Pagination'
import { Car } from '@/types/carsType'

const CarList = () => {
  const [page, setPage] = useState(1)
  const [cars, setCars] = useState<Car[]>([])

  const carsPerPage = 15
  const pageQuantity = Math.ceil(carsBd.length / 15)

  const getCarsForPage = useCallback(() => {
    var startIndex = (page - 1) * carsPerPage
    var endIndex = startIndex + carsPerPage

    return carsBd.slice(startIndex, endIndex)
  }, [page])

  useEffect(() => {
    const carsPart = getCarsForPage()
    console.log(carsPart)
    setCars(carsPart)
  }, [getCarsForPage])

  return (
    <>
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
      <Banner />
      <PaginationButtons pageQuantity={pageQuantity} setPage={setPage} />
    </>
  )
}

export default CarList

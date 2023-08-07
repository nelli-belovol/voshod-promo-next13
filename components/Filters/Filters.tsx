'use client'
import ArrowUpSvg from '@/assets/icons/arrowUp.svg'
import React, { ChangeEventHandler, useState } from 'react'
import { marks } from '@/db/marks'
import { models } from '@/db/models'
import dynamic from 'next/dynamic'
import styles from './Filters.module.scss'

type FiltersType = {
  price: number[]
  mark: string[]
  model: string[]
  bodyType: string[]
  engine: string[]
  gearBox: string[]
  wheelDrive: string[]
  fuel: string[]
  year: number[]
}

const SliderRange = dynamic(() => import('./SliderRange'), {
  ssr: false,
})

const Filters = () => {
  const [filters, setFilters] = useState<FiltersType>({
    price: [500000, 1000000],
    mark: ['Все'],
    model: ['Все'],
    bodyType: ['Все'],
    engine: ['Все'],
    gearBox: ['Все'],
    wheelDrive: ['Все'],
    fuel: ['Все'],
    year: [2003, 2023],
  })

  // Функция для обновления состояния price
  const setPriceRange = (values: number[]) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      price: values,
    }))
  }

  const handleTypeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      price: [Number(e.target.value), prevFilters.price[1]],
    }))
  }

  const handleTypeMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      price: [prevFilters.price[0], Number(e.target.value)],
    }))
  }

  const handleMarkCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const markValue = e.target.value
    setFilters(prevFilters => {
      // Проверяем, был ли выбран уже данный чекбокс
      const isMarkSelected = prevFilters.mark.includes(markValue)

      // Если чекбокс уже выбран, удаляем его значение из массива
      // иначе, добавляем его в массив марок
      const updatedMarks = isMarkSelected
        ? prevFilters.mark.filter(mark => mark !== markValue)
        : [...prevFilters.mark, markValue]

      return {
        ...prevFilters,
        mark: updatedMarks,
      }
    })
  }

  return (
    <div className={styles.filtersWrap}>
      {/* PRICE   */}
      <div className={styles.filterBlock}>
        <p className={styles.filterTitle}>
          Цена <ArrowUpSvg />
        </p>
        <div className={styles.inputsWrap}>
          <input type="number" value={filters.price[0]} className={styles.inputValue} onChange={handleTypeMinPrice} />
          <input type="number" value={filters.price[1]} className={styles.inputValue} onChange={handleTypeMaxPrice} />
        </div>
        <SliderRange min={filters.price[0]} max={filters.price[1]} setPriceRange={setPriceRange} />
      </div>
      {/* MARK   */}
      <div className={styles.filterBlock}>
        <p className={styles.filterTitle}>
          Марка <ArrowUpSvg />
        </p>
        <ul className={styles.list}>
          <li key="allMarks">
            <input
              type="checkbox"
              onChange={handleMarkCheckboxChange}
              value={'Все'}
              checked={filters.mark.includes('Все')}
            />
            <span>Все</span>
          </li>
          {marks.map(mark => (
            <li key={mark}>
              <input
                type="checkbox"
                onChange={handleMarkCheckboxChange}
                value={mark}
                checked={filters.mark.includes(mark)}
              />
              <span>{mark}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* MODEL   */}

      <div className={styles.filterBlock}>
        <p className={styles.filterTitle}>
          Модель <ArrowUpSvg />
        </p>
        <ul className={styles.list}>
          <li key="allMModels">
            <input
              type="checkbox"
              onChange={handleMarkCheckboxChange}
              value={'Все'}
              checked={filters.mark.includes('Все')}
            />
            <span>Все</span>
          </li>
          {models.map(model => (
            <>
              <p>{model.modelName}</p>
              <ul key={model.modelName} className={styles.list}>
                {model.modelsType.map(modelType => (
                  <li key={modelType}>
                    <input
                      type="checkbox"
                      onChange={handleMarkCheckboxChange}
                      value={model.modelName}
                      checked={filters.model.includes(modelType)}
                    />
                    <span>{modelType}</span>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Filters

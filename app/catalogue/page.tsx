'use client'

import Banner from '@/components/Banner/Banner'
import CarList from '@/components/CarList/CarList'
import Filters from '@/components/Filters/Filters'
import Notification from '@/components/Notification/Notification'
import { Tag } from '@/components/Tag/Tag'
import React, { useState } from 'react'

const Catalogue = () => {
  return (
    <div
      className="section"
      style={{ display: 'flex', flexDirection: 'row', gap: '40px', paddingBottom: '100px', paddingTop: '120px' }}
    >
      <Filters />
      <div style={{ width: '100%' }}>
        <Notification />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '40px',
            justifyContent: 'space-between',
            marginTop: '65px',
          }}
        >
          <div>
            <Tag text="Все" tagStyle="All" />
            <Tag text="Новые" tagStyle="filter" />
            <Tag text="С пробегом" tagStyle="filter" />
          </div>
          <div>
            <Tag text="Все" tagStyle="All" />
            <Tag text="Лизинг до 7 лет" tagStyle="filter" />
            <Tag text="Аванс 0%" tagStyle="filter" />
            <Tag text="Гарантия 150 тыс. км" tagStyle="filter" />
          </div>
        </div>
        <CarList />
      </div>
    </div>
  )
}
export default Catalogue

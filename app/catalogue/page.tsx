'use client'

import CarList from '@/components/CarList/CarList'
import Filters from '@/components/Filters/Filters'
import React, { useState } from 'react'

const Catalogue = () => {
  return (
    <div
      className="section"
      style={{ display: 'flex', flexDirection: 'row', gap: '40px', paddingBottom: '100px', paddingTop: '120px' }}
    >
      <Filters />
      <CarList />
    </div>
  )
}
export default Catalogue

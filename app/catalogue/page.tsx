'use client'

import CarList from '@/components/CarList/CarList'
import Filters from '@/components/Filters/Filters'
import React, { useState } from 'react'

const Catalogue = () => {
  return (
    <div className="section">
      <Filters />
      <CarList />
    </div>
  )
}
export default Catalogue

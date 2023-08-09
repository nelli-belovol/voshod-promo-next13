'use client'

import React from 'react'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

export default function PaginationButtons({
  pageQuantity,
  setPage,
}: {
  pageQuantity: number
  setPage: (v: number) => void
}) {
  return (
    <Stack spacing={2}>
      <Pagination count={pageQuantity} showFirstButton showLastButton onChange={(event, page) => setPage(page)} />
    </Stack>
  )
}

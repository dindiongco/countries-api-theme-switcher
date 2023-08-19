'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  getSearchResults: (value: any[]) => void
}

const RegionDropdown = ({getSearchResults}: Props) => {
  const [query, setQuery] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const response = await fetch(`/api/region?query=${query}`)

    const country = await response.json()

    getSearchResults(country)

   }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <Select value={query} onValueChange={(e: string) => setQuery(e)}>
        <SelectTrigger className='dark:bg-primary-700 bg-primary-200 w-[300px]'>
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asia">Asia</SelectItem>
          <SelectItem value="americas">Americas</SelectItem>
          <SelectItem value="africa">Africa</SelectItem>
          <SelectItem value="europe">Europe</SelectItem>
          <SelectItem value="oceania">Oceania</SelectItem>
        </SelectContent>
      </Select>
      <Button variant={'secondary'} type="submit">Filter</Button>
    </form>
  )
}

export default RegionDropdown
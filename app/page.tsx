'use client'

import {v4 as uuid} from 'uuid'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CardComponent from './(shared)/Card'
import getCountries from './libs/getCountries'
import Link from 'next/link'
import getCountry from './libs/getCountry'
import RegionDropdown from './(shared)/RegionDropdown'
import { useEffect, useState } from 'react'
import Countries from './(shared)/Countries'
import SearchCountry from './(shared)/SearchCountry'


export default function Home() {
  const [countries, setCountries] = useState<string[]>([])

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch('/api')
      const countries = await res.json()
      setCountries(countries)
    }

    getCountries()
  }, [])


  return (
    <main className="w-full bg-primary-200 dark:bg-primary-800">
      <div className='w-3/4 mx-auto my-5'>
        {/* INPUT AND DROPDOWN */}
        <div className='md:flex justify-between mb-5'>
          {/* SEARCH BAR */}
          <SearchCountry getSearchResults={(value: string[]) => setCountries(value)} />

          {/*REGION DROPDOWN  */}
          <RegionDropdown getSearchResults={(value: string[]) => setCountries(value)} />
        </div>

        {/* COUNTRIES */}
        <Countries countries={countries}/>
      </div>
    </main>
  )
}

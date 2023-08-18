'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

type Props = {
    getSearchResults: (value: any[]) => void
}

export default function SearchCoins({ getSearchResults }: Props) {
   const [query, setQuery] = useState('')

   const handleSubmit = async (e: any) => {
    e.preventDefault()

    const response = await fetch(`/api/search?query=${query}`)

    const country = await response.json()

    getSearchResults(country)

   }

  return (
      <form onSubmit={handleSubmit} className="flex">
          <Input placeholder='Search for a country...' className='dark:bg-primary-700 bg-primary-100' value={query} onChange={e => setQuery(e.target.value)} />
          <Button variant='secondary' className='border' type="submit">Search</Button>
      </form>
  )
}
'use client'

import Link from "next/link"
import { useState } from "react"

type Props = {
    getSearchResults: () => void
}

export default function SearchCoins({ getSearchResults }: Props) {
   const [query, setQuery] = useState('')

   const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(`/api/coins/search?query=${query}`)

    const country = await response.json()

    getSearchResults(country)

   }

  return (
    <div className="text-center my-20">
        <form onSubmit={handleSubmit}>
            <input className="text-black border-2 border-black rounded-full px-3 py-2" type="text" placeholder="Search coin..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="bg-black text-white rounded-full px-3 py-2 hover:bg-black/60" type="submit">Search</button>
        </form>
    </div>
  )
}
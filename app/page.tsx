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


export default async function Home() {
  const countries = await getCountries()


  return (
    <main className="w-full bg-primary-200 dark:bg-primary-800">
      <div className='w-3/4 mx-auto my-5'>
        {/* INPUT AND DROPDOWN */}
        <div className='md:flex justify-between mb-5'>
          {/* SEARCH BAR */}
          <Input placeholder='Search for a country...' className='basis-1/3 dark:bg-primary-700 bg-primary-100' />

          {/*REGION DROPDOWN  */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='secondary' className='border'>Filter by Region</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-secondary'>
              <DropdownMenuItem>Asia</DropdownMenuItem>
              <DropdownMenuItem>Americas</DropdownMenuItem>
              <DropdownMenuItem>Africa</DropdownMenuItem>
              <DropdownMenuItem>Europe</DropdownMenuItem>
              <DropdownMenuItem>Oceania</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* COUNTRIES */}
        <div className='md:grid grid-flow-row gap-4 grid-cols-4 lg:grid-cols-6'>
          {countries.map((country: any) => (
              // eslint-disable-next-line react/jsx-key
              <Link href={`countries/${encodeURIComponent(country.name.official)}`}>
                <CardComponent
                  flagImgUrl={country.flags.svg}
                  capital={country.capital[0]}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                />
              </Link>
          ))}
    </div>
      </div>
    </main>
  )
}

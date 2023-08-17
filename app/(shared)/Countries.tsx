import Link from 'next/link'
import React from 'react'
import CardComponent from './Card'

type Props = {
    countries: Array<String>
}

const Countries = ({countries}: Props) => {
  return (
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
  )
}

export default Countries
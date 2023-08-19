import React from 'react'

type Props = {
    name: string
    population: number
    region: string
    subRegion: string
    capital: string
    topLevelDomain: string
}

const Details = ({capital, name, population, region, subRegion, topLevelDomain}: Props) => {
  return (
    <div className='grid grid-cols-2 grid-rows-3 gap-x-20'>
        <div className='col-span-1 row-span-2'>
            <h2 className='text-3xl font-bold'>{name}</h2>
            <ul>
                <li><span className='font-bold'>Population: </span>{population.toLocaleString()}</li>
                <li><span className='font-bold'>Region: </span>{region}</li>
                <li><span className='font-bold'>Sub Region: </span>{subRegion}</li>
                <li><span className='font-bold'>Capital: </span>{capital}</li>
                <li><span className='font-bold'>Top Level Domain: </span>{topLevelDomain}</li>
            </ul>
        </div>
        <div className='col-span-[-1] row-span-[-1]'>
            <ul>
                <li><span className='font-bold'>Population: </span>{population.toLocaleString()}</li>
                <li><span className='font-bold'>Region: </span>{region}</li>
                <li><span className='font-bold'>Sub Region: </span>{subRegion}</li>
            </ul>
        </div>
    </div>
  )
}

export default Details
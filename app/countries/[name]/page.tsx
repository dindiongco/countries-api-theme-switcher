import getCountry from '@/app/libs/getCountry'
import React from 'react'
import Image from 'next/image'
import Details from '@/app/(shared)/Details'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MoveLeft } from 'lucide-react'

type Props = {
    params: {name: string}
}

const CountryPage = async ({params}: Props) => {
    const {name} = params
    const country = await getCountry(name)
    console.log(country)

  return (
    <section className='w-full'>
      <div className='w-3/4 mx-auto my-10'>
        <Link href={'/'}><Button variant='secondary' className='gap-3'><MoveLeft />Back</Button></Link>
      </div>
      <div className='md:flex justify-around w-5/6 mx-auto mt-5'>
        <div>
          {country.map((details: any) => (
            // eslint-disable-next-line react/jsx-key
                <Image
                  src={details.flags.svg}
                  width={400}
                  height={300}
                  alt={details.flags.alt}
                />
          ))}
        </div>
        <div>
          {country.map((details: any) => (
            <Details
              key={details.name.common}
              capital={details.capital[0]}
              name={details.name.common}
              population={details.population}
              subRegion={details.subregion}
              region={details.region}
              topLevelDomain={details.tld.map((detail:any) => (
                <>{detail}</>
              ))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CountryPage
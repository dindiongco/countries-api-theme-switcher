import React from 'react'
import Image from 'next/image'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

type Props = {
    name: string
    population: number
    flagImgUrl: string
    region: string
    capital: string
}

const CardComponent = ({name, capital, population, region, flagImgUrl}: Props) => {
  return (
    <>
        <Card className='mb-4 max-w-[300px] h-[375px]'>
            
            <CardHeader>
                <Image 
                    width={300}
                    height={20}
                    alt="flag"
                    src={flagImgUrl}
                />
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul>
                    <li><span className='font-semibold'>Population: </span>{population.toLocaleString()}</li>
                    <li><span className='font-semibold'>Region: </span>{region}</li>
                    <li><span className='font-semibold'>Capital: </span>{capital}</li>
                </ul>
            </CardContent>
        </Card>
    </>
  )
}

export default CardComponent
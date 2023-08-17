import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'

type Props = {}

const RegionDropdown = (props: Props) => {
  return (
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
    
  )
}

export default RegionDropdown
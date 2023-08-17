
export default async function getUsers() {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region')
 
    if(!res.ok) {
       throw new Error('failed to fetch users')
    }
 
     return await res.json()
 }
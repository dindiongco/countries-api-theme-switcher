export default async function getUser(country: string) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)

    if(!response.ok) {
        throw new Error('failed to fetch user')
    }

    return response.json()

}
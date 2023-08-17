export default async function getUser(region: string) {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)

    if(!response.ok) {
        throw new Error('failed to fetch user')
    }

    return response.json()

}
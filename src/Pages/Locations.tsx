import { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

interface LocationsTypes {
  name: string,
  id: number,
  type: string,
  species: string,
}


export default function Locations() {
  const [data, setData] = useState<LocationsTypes[]>([])
  const [search, setSearch] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location')
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log('error', error))
      .finally(() => setIsFetching(false))
  }, [])

  return (
    <>
      <Header />
      <section className="flex min-h-screen flex-col items-center px-24">
        <div className="self-start ml-1">
          <input type="text" placeholder="Search location..." className="w-80 px-2 py-1 rounded-md font-medium text-lg" onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex flex-row flex-wrap justify-around gap-10 py-8 ">
          {isFetching && <p className="text-white text-center">Carregando...</p>}
          {data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
            <div key={item.id} className="flex flex-col gap-y-1 w-[250px] h-fit cursor-pointer">
              <h2 className="text-white text-xl font-bold py-1">{item.name}</h2>
              <p className="text-white text-base font-bold">Type: {item.type}</p>
              <p className="text-white text-base font-bold">Dimension: {item.species}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

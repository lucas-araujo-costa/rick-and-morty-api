import { useState, useEffect } from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

interface CharacterTypes {
  id: number,
  image: string,
  name: string,
  gender: string,
  species: string,
  origin: {
    name: string
  }
}

export function Characters() {
  const [data, setData] = useState<CharacterTypes[]>([])
  const [search, setSearch] = useState('')
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
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
          <input type="text" placeholder="Search character..." className="w-80 px-2 py-1 rounded-md font-medium text-lg" onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex flex-row flex-wrap justify-around gap-8 py-8 ">
          {isFetching && <p className="text-white text-center">Carregando...</p>}
          {data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
            <div key={item.id} className="flex flex-col gap-y-1 cursor-pointer hover:scale-110 hover:duration-100">
              <img src={item.image} className="rounded-lg" />
              <h2 className="text-white text-xl text-center font-bold py-1">{item.name}</h2>
              <p className="text-white text-base font-bold">Gender: {item.gender}</p>
              <p className="text-white text-base font-bold">Species: {item.species}</p>
              <p className="text-white text-base font-bold">Origin: {item.origin.name}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

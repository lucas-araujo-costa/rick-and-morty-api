import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface EpisodesTypes {
  id: number,
  name: string,
  episode: string,
  air_date: string,
}

export default function Episodes() {
  const [data, setData] = useState<EpisodesTypes[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log('error', error))
  }, [])

  return (
    <>
      <Header />
      <section className="flex min-h-screen flex-col items-center px-24">
        <div className="self-start ml-1">
          <input type="text" placeholder="Search episode..." className="w-80 px-2 py-1 rounded-md font-medium text-lg" onChange={(e) => setSearch(e.target.value)} />
          <div className="flex flex-row flex-wrap justify-start gap-20 py-8 ">
            {data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
              <div key={item.id} className="flex flex-col gap-y-1 w-[250px] h-fit cursor-pointer">
                <h2 className="text-white text-lg text-left font-bold py-1">{item.episode}: {item.name}</h2>
                <p className="text-white text-base font-bold">Release Date: {item.air_date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

import Header from '../components/Header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-hero text-white bg-no-repeat bg-cover'>
        <div className='px-80 pt-72 flex flex-col gap-6'>
          <h2 className='font-bold text-5xl'>A wikipedia developed with The Rick and Morty API.</h2>
          <p className='text-lg'>For more informations, visit the <a href="https://rickandmortyapi.com/" target="_blank"className='underline'>official API website.</a></p>
        </div>
      </main>
    </>
  )
}

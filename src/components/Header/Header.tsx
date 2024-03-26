
export default function Header() {
  return (
    <header className="text-white px-10 py-4 pr-20">
      <div className="flex items-center justify-between">
        <div>
          <a href={"/"} className="flex items-center gap-2">
            <img src="https://images.yampi.me/assets/stores/rick-and-morty-tabacaria/uploads/icon/64051dffc14d9.png" className="size-10" />
            <h1 className="text-4xl">Rick and Morty Wiki</h1>
          </a>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li className="text-lg"><a href={"/"}>Home</a></li>
            <li className="text-lg"><a href={"/characters"}>Characters</a></li>
            <li className="text-lg"><a href={"/locations"}>Locations</a></li>
            <li className="text-lg"><a href={"/episodes"}>Episodes</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

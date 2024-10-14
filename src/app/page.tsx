import { HomeIcon, Library, Search } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-red-500" />
            <div className="size-3 rounded-full bg-yellow-500" />
            <div className="size-3 rounded-full bg-green-500" />
          </div>

          <nav className="mt-10 space-y-5">
            <a
              href="/"
              className="flex items-center gap-3 font-semibold text-sm text-zinc-50"
            >
              <HomeIcon />
              Home
            </a>

            <a
              href="/"
              className="flex items-center gap-3 font-semibold text-sm text-zinc-50"
            >
              <Search />
              Search
            </a>

            <a
              href="/"
              className="flex items-center gap-3 font-semibold text-sm text-zinc-50"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-10 flex flex-col gap-3 border-zinc-800 border-t pt-10">
            <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hot Hits Brasil
            </a>
            <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rap
            </a>
            <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
              My Playlist #13
            </a>
            <a href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="border-zinc-700 border-t bg-zinc-800 p-6">
        footer
      </footer>
    </div>
  )
}

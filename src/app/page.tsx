import { HomeIcon, Library, Search } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">Sidebar</aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="border-zinc-700 border-t bg-zinc-800 p-6">
        footer
      </footer>
    </div>
  )
}

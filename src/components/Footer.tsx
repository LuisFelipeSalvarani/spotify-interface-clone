import {
  Heart,
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-zinc-700 border-t bg-zinc-800 px-6 py-4">
      <div className="flex items-center gap-3">
        <Image
          src="/album.png"
          width={56}
          height={56}
          alt="Capa do álbum Toxicity da banda System of a Down"
        />

        <div className="flex flex-col">
          <strong className="font-normal">Toxicity</strong>
          <span className="text-xs text-zinc-400">System of a Down</span>
        </div>

        <Heart className="ml-1 size-5" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />

          <SkipBack size={20} className="fill-zinc-50 text-zinc-200" />

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-white pl-0.5 text-black"
          >
            <Play className="fill-black" />
          </button>

          <SkipForward size={20} className="fill-zinc-50 text-zinc-200" />

          <Repeat size={20} className="text-zinc-200" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">2:40</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-64 rounded-full bg-zinc-200" />
          </div>
          <span className="text-xs text-zinc-400">3:39</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 w-24 rounded-full bg-zinc-600">
            <div className="h-1 w-16 rounded-full bg-zinc-200" />
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}

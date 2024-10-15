import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button type="button" className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button type="button" className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-10 font-semibold text-3xl">Good Afternoon</h1>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <a
              href="/"
              className="group flex items-center gap-4 overflow-hidden rounded-md bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                width={104}
                height={104}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <strong>Toxicity</strong>

              <button
                type="button"
                className="invisible mr-8 ml-auto flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black group-hover:visible"
              >
                <Play className="fill-black" />
              </button>
            </a>

            <a
              href="/"
              className="group flex items-center gap-4 overflow-hidden rounded-md bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                width={104}
                height={104}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <strong>Toxicity</strong>

              <button
                type="button"
                className="invisible mr-8 ml-auto flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black group-hover:visible"
              >
                <Play className="fill-black" />
              </button>
            </a>

            <a
              href="/"
              className="group flex items-center gap-4 overflow-hidden rounded-md bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                width={104}
                height={104}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <strong>Toxicity</strong>

              <button
                type="button"
                className="invisible mr-8 ml-auto flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black group-hover:visible"
              >
                <Play className="fill-black" />
              </button>
            </a>

            <a
              href="/"
              className="group flex items-center gap-4 overflow-hidden rounded-md bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                width={104}
                height={104}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <strong>Toxicity</strong>

              <button
                type="button"
                className="invisible mr-8 ml-auto flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black group-hover:visible"
              >
                <Play className="fill-black" />
              </button>
            </a>

            <a
              href="/"
              className="group flex items-center gap-4 overflow-hidden rounded-md bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                width={104}
                height={104}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <strong>Toxicity</strong>

              <button
                type="button"
                className="invisible mr-8 ml-auto flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black group-hover:visible"
              >
                <Play className="fill-black" />
              </button>
            </a>

            <a
              href="/"
              className="group flex items-center gap-4 overflow-hidden rounded-md bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                width={104}
                height={104}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <strong>Toxicity</strong>

              <button
                type="button"
                className="invisible mr-8 ml-auto flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black group-hover:visible"
              >
                <Play className="fill-black" />
              </button>
            </a>
          </div>

          <h2 className="mt-10 font-semibold text-2xl">
            Made for Luis Felipe Salvarani
          </h2>

          <div className="mt-4 grid grid-cols-8 gap-4">
            <a
              href="/"
              className="group relative flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <button
                type="button"
                className="invisible absolute top-[118px] right-[18px] flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black opacity-0 transition-all group-hover:visible group-hover:opacity-100"
              >
                <Play className="fill-black" />
              </button>

              <strong className="font-semibold">Daily Mix 1</strong>

              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>

            <a
              href="/"
              className="group relative flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <button
                type="button"
                className="invisible absolute top-[118px] right-[18px] flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black opacity-0 transition-all group-hover:visible group-hover:opacity-100"
              >
                <Play className="fill-black" />
              </button>

              <strong className="font-semibold">Daily Mix 1</strong>

              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>

            <a
              href="/"
              className="group relative flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <button
                type="button"
                className="invisible absolute top-[118px] right-[18px] flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black opacity-0 transition-all group-hover:visible group-hover:opacity-100"
              >
                <Play className="fill-black" />
              </button>

              <strong className="font-semibold">Daily Mix 1</strong>

              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>

            <a
              href="/"
              className="group relative flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <button
                type="button"
                className="invisible absolute top-[118px] right-[18px] flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black opacity-0 transition-all group-hover:visible group-hover:opacity-100"
              >
                <Play className="fill-black" />
              </button>

              <strong className="font-semibold">Daily Mix 1</strong>

              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>

            <a
              href="/"
              className="group relative flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <button
                type="button"
                className="invisible absolute top-[118px] right-[18px] flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black opacity-0 transition-all group-hover:visible group-hover:opacity-100"
              >
                <Play className="fill-black" />
              </button>

              <strong className="font-semibold">Daily Mix 1</strong>

              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>

            <a
              href="/"
              className="group relative flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <button
                type="button"
                className="invisible absolute top-[118px] right-[18px] flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black opacity-0 transition-all group-hover:visible group-hover:opacity-100"
              >
                <Play className="fill-black" />
              </button>

              <strong className="font-semibold">Daily Mix 1</strong>

              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>

            <a
              href="/"
              className="group relative flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <button
                type="button"
                className="invisible absolute top-[118px] right-[18px] flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black opacity-0 transition-all group-hover:visible group-hover:opacity-100"
              >
                <Play className="fill-black" />
              </button>

              <strong className="font-semibold">Daily Mix 1</strong>

              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>

            <a
              href="/"
              className="group relative flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
            >
              <Image
                src="/album.png"
                className="w-full"
                width={120}
                height={120}
                alt="Capa do álbum Toxicity da banda System of a Down"
              />

              <button
                type="button"
                className="invisible absolute top-[118px] right-[18px] flex size-12 items-center justify-center rounded-full bg-green-400 pl-0.5 text-black opacity-0 transition-all group-hover:visible group-hover:opacity-100"
              >
                <Play className="fill-black" />
              </button>

              <strong className="font-semibold">Daily Mix 1</strong>

              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

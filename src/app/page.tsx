import { Footer } from '@/componentes/Footer'
import { Sidebar } from '@/componentes/Sibebar'
import { Home as ChevronLeft, ChevronRight, Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/jackboys.jpg" width={104} height={104} alt="Capa Travis - Jackboys" />
              <strong>Wasting List</strong>
              <button className='w-12 h-12 flex items-center justify-content pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/jackboys.jpg" width={104} height={104} alt="Capa Travis - Jackboys" />
              <strong>Wasting List</strong>
              <button className='w-12 h-12 flex items-center justify-content pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/jackboys.jpg" width={104} height={104} alt="Capa Travis - Jackboys" />
              <strong>Wasting List</strong>
              <button className='w-12 h-12 flex items-center justify-content pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/jackboys.jpg" width={104} height={104} alt="Capa Travis - Jackboys" />
              <strong>Wasting List</strong>
              <button className='w-12 h-12 flex items-center justify-content pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/jackboys.jpg" width={104} height={104} alt="Capa Travis - Jackboys" />
              <strong>Wasting List</strong>
              <button className='w-12 h-12 flex items-center justify-content pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <img src="/jackboys.jpg" width={104} height={104} alt="Capa Travis - Jackboys" />
              <strong>Wasting List</strong>
              <button className='w-12 h-12 flex items-center justify-content pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Nathan Mota</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <img src="/jackboys.jpg" className='w-full' width={120} height={120} alt="Capa Travis - Jackboys" />
              <strong className='font-semibold'>Daily Mix</strong>
              <span className='text-sm text-zinc-400'>Travis Scott</span>
            </a>
            <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <img src="/jackboys.jpg" className='w-full' width={120} height={120} alt="Capa Travis - Jackboys" />
              <strong className='font-semibold'>Daily Mix</strong>
              <span className='text-sm text-zinc-400'>Travis Scott</span>
            </a>
            <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <img src="/jackboys.jpg" className='w-full' width={120} height={120} alt="Capa Travis - Jackboys" />
              <strong className='font-semibold'>Daily Mix</strong>
              <span className='text-sm text-zinc-400'>Travis Scott</span>
            </a>
            <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <img src="/jackboys.jpg" className='w-full' width={120} height={120} alt="Capa Travis - Jackboys" />
              <strong className='font-semibold'>Daily Mix</strong>
              <span className='text-sm text-zinc-400'>Travis Scott</span>
            </a>
            <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <img src="/jackboys.jpg" className='w-full' width={120} height={120} alt="Capa Travis - Jackboys" />
              <strong className='font-semibold'>Daily Mix</strong>
              <span className='text-sm text-zinc-400'>Travis Scott</span>
            </a>
            <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <img src="/jackboys.jpg" className='w-full' width={120} height={120} alt="Capa Travis - Jackboys" />
              <strong className='font-semibold'>Daily Mix</strong>
              <span className='text-sm text-zinc-400'>Travis Scott</span>
            </a>
            <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <img src="/jackboys.jpg" className='w-full' width={120} height={120} alt="Capa Travis - Jackboys" />
              <strong className='font-semibold'>Daily Mix</strong>
              <span className='text-sm text-zinc-400'>Travis Scott</span>
            </a>
            <a className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <img src="/jackboys.jpg" className='w-full' width={120} height={120} alt="Capa Travis - Jackboys" />
              <strong className='font-semibold'>Daily Mix</strong>
              <span className='text-sm text-zinc-400'>Travis Scott</span>
            </a>
          </div>

        </main>
      </div >

      <Footer />

    </div >
  )
}

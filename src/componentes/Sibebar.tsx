import { Home as HomeIcon, Search, Library } from 'lucide-react'


export function Sidebar(){
    return (
        <aside className="w-72 bg-zinc-950 p-6">

          <div className="flex items-center gap-2">
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>90s Hip-Hop</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>BRock 80</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Reggae Classics</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Pop Punk Powerhouses</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock Ballads</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>The Best of MPB</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Funk</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock Nacional</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Samba</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Pagode</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Jersey</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Trap</a>
          </nav>

        </aside>
    )
}
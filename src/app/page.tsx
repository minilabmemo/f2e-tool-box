import Image from 'next/image'
import Link from "next/link";
export default function Home() {
  return (
    <main className='container m-auto bg-blue-300 flex flex-col h-screen p-4'>
      <h1 className='text-2xl	font-bold'>F2E Tool Box</h1>
      <div className="border-b-4 border-slate-700 p-4 pb-6 mb-4">Play - Pixel Text Using :) </div>
      <div className='flex'>

        <ul className="list-disc ml-4">
          <li className="mb-2">tool
            <ul className="list-disc ml-4">
              <li><Link href={`/tool/font`}>font</Link></li>
              <li><Link href={`/tool/screen`}>screen</Link></li>
            </ul>
          </li>
          <li className="mb-2">showcase
            <ul className="list-disc ml-4">
              <li><Link href={`/showcase/graph`}>graph</Link></li>
              <li><Link href={`/showcase/text`}>text effect</Link></li>
              <li><Link href={`/showcase/map`}>map</Link></li>
              <li><Link href={`/showcase/waterfall`}>waterfall - Masonry layout</Link></li>
              <li><Link href={`/showcase/carousel`}>carousel</Link></li>
            </ul>
          </li>
          <li className="mb-2">cheat sheet
            <ul className="list-disc ml-4">
              <li><Link href={`/cheat_sheet/flex_base`}>flex base</Link></li>
              <li><Link href={`/cheat_sheet/flex`}>flex</Link></li>
              <li><Link href={`/cheat_sheet/grid`}>grid</Link></li>
            </ul>
          </li>
          <li className="mb-2">react
            <ul className="list-disc ml-4">
              <li><Link href={`/react/simple`}>simple /useState /useRef</Link></li>
              <li><Link href={`/react/useEffect`}>useEffect</Link></li>
              <li><Link href={`/react/useHooks`}>useHooks</Link></li>
              <li><Link href={`/react/animate`}>animate</Link></li>
            </ul>
          </li>
        </ul>



      </div>


    </main>
  )
}

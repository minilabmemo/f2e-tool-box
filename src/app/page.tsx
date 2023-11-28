import Image from 'next/image'
import Link from "next/link";
export default function Home() {
  return (
    <main className='container m-auto bg-blue-300 flex flex-col h-screen p-4'>
      <h1 className='text-2xl	font-bold'>F2E Tool Box</h1>
      <div className='flex'>

        <ul>
          <li>  <Link href={`/tool/font`}>font</Link></li>
          <li>  <Link href={`/tool/graph`}>graph</Link></li>
          <li> <Link href={`/tool/screen`}>screen</Link></li>
          <li> <Link href={`/showcase/map`}>map</Link></li>
        </ul>
      </div>


    </main>
  )
}

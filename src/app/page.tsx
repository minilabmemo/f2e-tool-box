import Image from 'next/image'
import Link from "next/link";
export default function Home() {
  return (
    <main className='flex flex-col'>
      <h1 className='text-lg	font-bold'>F2E Tool Box</h1>
      <div className='flex'>

        <ul>
          <li>    <Link href={`/tool/font`}>font</Link></li>
          <li> <Link href={`/tool/screen`}>screen</Link></li>
        </ul>
      </div>


    </main>
  )
}


import Image from 'next/image'
import { Jua, Kalam } from 'next/font/google'
const jolly = Jua({
  subsets: ['latin'],

  weight: '400'
})

const jfont = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
})
import "./page.css"
export default function Page() {
  return <div>
    <Image
      src="/images/seafix.png"
      width={300}
      height={300}
      alt="sea"
    />
    <div className={`${jfont.className} flex flex-col items-center justify-center text-mask  w-[500px] h-[230px]`}>
      <div className="  text-[80px] font-bold leading-[100%] ">2024</div>
      <div className="  text-[60px] font-bold">happy new year!</div>
    </div>
    <div className={`${jfont.className} flex flex-col items-center justify-center  text w-[500px] h-[230px]`}>
      <div className="  text-[80px] font-bold leading-[100%] text-white ">2024</div>
      <div className="  text-[60px] font-bold text-white">happy new year!</div>
    </div>
    <div className={`${jfont.className} flex flex-col items-center justify-center `}>
      <div className="text-mask  text-[100px] font-bold leading-[100%]">2024</div>
      <div className="text-mask  text-[80px] font-bold">happy new year!</div>
    </div>

    <div className={`${jolly.className} flex flex-col items-center`}>
      <div className="mask-cover  text-[90px] font-bold leading-[100%">2024</div>
      <div className="mask-cover  text-[80px] font-bold">happy new year!</div>
    </div>
  </div>

}


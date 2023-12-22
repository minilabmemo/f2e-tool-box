
"use client"
import { useRef, useState } from "react";
import "./animate.css"


export default function App() {
  const [open, setOpen] = useState(false)

  return <>
    <button className="bg-blue-300 p-3 w-[100px] rounded-sm my-3" onClick={() => setOpen(!open)}>open {String(open)}.</button>
    <div className="b">方法一 : 改變 class </div>
    <div className={` w-[1000px] bg-red-300 `}>
      <div className={`b-3  h-[50px]  bg-yellow-300 width-animate  ${open ? " w-[1000px]" : "w-[500px]"}`}> switch:本身雖有動畫，但切換寬度只是切換而已</div>
      <div className={`b-3  h-[50px]  bg-yellow-300 transition-all duration-[2000] ease-in-out ${open ? "w-[1000px]" : "w-[500px]"}`}> transition: 本身有 transition 切換寬度</div>
      <div className={`b-3  h-[50px]  bg-yellow-300 ${open ? "width-animate" : "w-[500px]"}`}>animate :加上 animation</div>
    </div>
    <div>方法二：hover 的動畫使用：本身具有 transition，hover 後加上 w-full</div>
    <li className="group mx-5 w-[100px]">
      <a href="" >hover me</a>
      <div className=" w-0 group-hover:w-full transition-[width] duration-1000 ease-in-out bg-red-100 h-[5px] ">
      </div>
    </li>

    <div className="h">方法三：操控 DOM</div>

    <div className=" m-5 h-[5px] bg-blue-500"></div>
    <div>範例：按鈕的切換動畫，改變 active 即可完成，原本即有 transition 設定，多添加屬性</div>

    <div className={`line before:bg-red-400 after:bg-red-400 h-[50px] w-[50px] bg-slate-300 relative  ${open ? "active" : ""}`}>
      <div className=" h-[5px] bg-red-400 w-[100%] absolute top-1/2 -translate-y-1/2"></div>
    </div>

    <div className="my-3">改成純 tailwind 版本</div>
    <div className={`
    before:bg-red-400 before:w-[100%] before:h-[5px] before:absolute before:top-0  before:transition-all before:duration-1000
     after:bg-red-400 after:w-[100%]  after:h-[5px] after:absolute after:bottom-0  after:transition-all after:duration-1000
     h-[50px] w-[50px] bg-slate-300 relative  
     ${open ? "before:top-1/2 before:-translate-y-1/2 before:rotate-[135deg] after:bottom-1/2 after:translate-y-1/2 after:rotate-[45deg]" : ""}`}>
      <div className={` h-[5px] bg-red-400 w-[100%] absolute top-1/2 -translate-y-1/2  transition-opacity  ${open ? "opacity-0" : "opacity-100"}`}></div>
    </div>

  </>

}


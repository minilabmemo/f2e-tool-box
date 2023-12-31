
import "./page.css"


export default function Page() {
  return <div className="container m-auto py-10 layout-container">
    <div className="a1">
      <div className="1">- 預設狀態：裡面的盒子沒設高度的情況下
        <div className="box-container ">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note: 第一個設定 div,23 設定 span</div>
      </div>

      <div className="h"></div>
      <div className="py-5 h-[350px]">
        <div className="text-[24px] font-semibold">- flex 開啟</div>
        <div className="box-container flex">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="text-red-400">note:
          <div className="h">1.debug 後明明全都變成 block 連 span 也是顯示 block，但是是根據內容決定寬度</div>
          <div className="h">2. 高度則自動填滿...,因為 align-items 是 stresh</div>
          <div className="h">且不管裡面是否是 block 或是 inline 元素</div>
        </div>
      </div>
      <div className="1">- flex justify-center
        <div className="box-container flex justify-center">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex justify-between
        <div className="box-container flex justify-between">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex justify-around
        <div className="box-container flex justify-around">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex justify-evenly
        <div className="box-container flex justify-evenly">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>

      <div className="line w-full h-5 bg-black"></div>

      <div className="h">align-content 與 align-items 預設都是使用 stretch, 但是如果有設定高度自動以 flex-start 為預設值。</div>
      <div className="1">- flex items-start
        <div className="box-container flex items-start">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>

      <div className="1">- flex items-center
        <div className="box-container flex items-center">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-end
        <div className="box-container flex items-end">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-stretch
        <div className="box-container flex items-stretch">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-baseline
        <div className="box-container flex items-baseline">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-baseline
        <div className="box-container flex items-baseline">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box7">box7</span>
        </div>
        <div className="h">note:</div>
      </div>
    </div>
    <div className="a2">
      <div className="1">- 預設狀態：裡面的盒子沒設高度的情況下，但方向改變
        <div className="box-container ">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note: 第一個設定 div,23 設定 span</div>
      </div>

      <div className="h"></div>
      <div className="py-5 h-[350px]">
        <div className="text-[24px] font-semibold">- flex 開啟   flex-direction: column;</div>
        <div className="box-container flex flex-col">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:
          方向改變
        </div>
      </div>
      <div className="1">- flex justify-center
        <div className="box-container flex justify-center flex-col">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex justify-between
        <div className="box-container flex justify-between flex-col">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex justify-around
        <div className="box-container flex justify-around flex-col">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex justify-evenly
        <div className="box-container flex justify-evenly flex-col">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>

      <div className="line w-full h-5 bg-black"></div>

      <div className="h">align-content 與 align-items 預設都是使用 stretch, 但是如果有設定高度自動以 flex-start 為預設值。</div>
      <div className="1">- flex items-start
        <div className="box-container flex items-start flex-col">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>

      <div className="1">- flex items-center
        <div className="box-container flex items-center flex-col">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-end
        <div className="box-container flex items-end flex-col">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-stretch
        <div className="box-container flex items-stretch flex-col">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-baseline
        <div className="box-container flex items-baseline flex-col">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-baseline
        <div className="box-container flex items-baseline flex-col">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box7">box7</span>
        </div>
        <div className="h">note:</div>
      </div>
    </div>
    <div className="a3">
      <div className="1">- 預設情況，裡面的盒子都有自己的寬高設定
        <div className="box-container ">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note: 第一個設定 span 使得高度寬度失效，依據內容決定大小，23 設定 div</div>
      </div>

      <div className="h"></div>
      <div className="py-5 h-[350px]">
        <div className="text-[24px] font-semibold">- flex 開啟</div>
        <div className="box-container flex">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:
          <div className="h"> 空間夠的情況下，可以看到裡面依據長寬設定</div>
          <div className="h">但 span 也會變成 block 寬高也會起作用</div>
        </div>
      </div>
      <div className="1">- flex justify-center
        <div className="box-container flex justify-center">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex justify-between
        <div className="box-container flex justify-between">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex justify-around
        <div className="box-container flex justify-around">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex justify-evenly
        <div className="box-container flex justify-evenly">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>

      <div className="line w-full h-5 bg-black"></div>
      <div className="1">- flex items-start
        <div className="box-container flex items-start">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>

      <div className="1">- flex items-center
        <div className="box-container flex items-center">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-end
        <div className="box-container flex items-end">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-stretch
        <div className="box-container flex items-stretch">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-baseline
        <div className="box-container flex items-baseline">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-baseline
        <div className="box-container flex items-baseline">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box7">box7</div>
        </div>
        <div className="h">note:</div>
      </div>
    </div>
    <div className="a4">
      <div className="1">- 預設情況，裡面的盒子都有自己的寬高設定，但方向改變
        <div className="box-container ">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note: 同前項</div>
      </div>

      <div className="h"></div>
      <div className="py-5 h-[350px]">
        <div className="text-[24px] font-semibold">- flex 開啟 flex-col</div>
        <div className="box-container flex flex-col">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:
          <div className="h"> 空間夠的情況下，可以看到裡面依據長寬設定</div>
          <div className="h">但 span 也會變成 block 寬高也會起作用</div>
        </div>
      </div>
      <div className="1">- flex justify-center
        <div className="box-container flex justify-center flex-col">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex justify-between
        <div className="box-container flex justify-between flex-col">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex justify-around
        <div className="box-container flex justify-around flex-col">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex justify-evenly
        <div className="box-container flex justify-evenly flex-col">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>

      <div className="line w-full h-5 bg-black"></div>
      <div className="1">- flex items-start
        <div className="box-container flex items-start flex-col">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>

      <div className="1">- flex items-center
        <div className="box-container flex items-center flex-col">
          <div className="box1">box1</div>
          <span className="box2">box2 text1</span>
          <span className="box3">box3text12345</span>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-end
        <div className="box-container flex items-end flex-col">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-stretch
        <div className="box-container flex items-stretch flex-col">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-baseline
        <div className="box-container flex items-baseline flex-col">
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box6">box6text12345</div>
        </div>
        <div className="h">note:</div>
      </div>
      <div className="1">- flex items-baseline
        <div className="box-container flex items-baseline flex-col" >
          <span className="box4">box4</span>
          <div className="box5">box5 text1</div>
          <div className="box7">box7</div>
        </div>
        <div className="h">note:</div>
      </div>
    </div>
  </div>

}
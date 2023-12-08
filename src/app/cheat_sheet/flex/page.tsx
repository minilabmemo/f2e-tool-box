

export default function Page() {
  return <div className="container m-auto py-10">
    <div>
      <h1 className="text-lg font-bold">初始</h1>
      <div className="w-[200px] h-[100px] bg-blue-300">
        parent: 200*100
      </div>
    </div>
    <div className="text-xs absolute ">盒子大小。</div>
    <div className="h-[20px] bg-green-600 opacity-30"> </div>
    <h1 className="text-lg font-bold">一般 block</h1>
    <div className="w-[200px] h-[100px] bg-blue-300">
      <div className="w-[300px] h-[50px] bg-red-300">
        div
      </div>
      <div className="w-[100px] h-[80px] bg-red-300">
        div
      </div>
    </div>
    <div className="text-xs absolute ">可以看到整個區塊超出父親，但是超出的部分卻不佔空間？要用 dev mode  可以看到重疊，下方物件如有背景顏色會壓在上面使之看不到顏色。</div>
    <div className="h-[20px] bg-green-600 opacity-30"> </div>
    <h1 className="text-lg font-bold">一般 inline</h1>
    <div className="w-[200px] h-[100px] bg-blue-300">
      <span className="w-[300px] h-[50px] bg-red-300">
        span w300 h50
      </span>
      <span className="w-[100px] h-[60px] bg-red-300">
        span w-100
      </span>
    </div>
    <div className="text-xs absolute ">span 長寬不起作用 寬度依據內容</div>
    <div className="h-[20px] bg-green-600 opacity-30"> </div>
    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：內容大於容器</h1>
      <div className="w-[200px] h-[100px] bg-blue-300 flex ">
        <div className="w-[300px] h-[50px] bg-red-300">
          div w-300
        </div>
        <span className="w-[100px] h-[60px] bg-red-300">
          span
        </span>
      </div>
      <div className="text-s absolute ">用 flex 排版 可以看到物件寬度被自動壓縮，而 span 明明是 inline 卻被變成 block 擁有了長寬大小。</div>
      <div className="h-[20px] bg-green-600 opacity-30"> </div>

    </section>
    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：內容小於容器</h1>
      <div className="w-[200px] h-[100px] bg-blue-300 flex ">
        <div className="w-[80px] h-[30px] bg-red-300">
          div w-300
        </div>
        <span className="w-[80px] h-[40px] bg-red-300">
          div
        </span>
      </div>
      <div className="text-xs absolute ">用 flex 排版 中間沒有任何間隔。</div>
      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>
    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：內容小於容器   justify-content: center;</h1>
      <div className="w-[200px] h-[100px] bg-blue-300 flex justify-center">
        <div className="w-[80px] h-[30px] bg-red-300">
          div w-300
        </div>
        <span className="w-[80px] h-[40px] bg-red-300">
          div
        </span>
      </div>
      <div className="text-xs absolute ">用 flex 排版 justify-center 中間沒有任何間隔。</div>
      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>
    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：內容小於容器   justify-content: center; 搭配 margin</h1>
      <div className="w-[200px] h-[100px] bg-blue-300 flex justify-center">
        <div className="w-[80px] h-[30px] bg-red-300  mx-4">
          div w-300
        </div>
        <span className="w-[80px] h-[40px] bg-red-300 mx-4">
          div
        </span>
      </div>
      <div className="text-s absolute ">用 flex 排版 justify-center 搭配子元素設置 margin 製造出間距</div>
      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>
    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：內容小於容器   justify-content: space-between;</h1>
      <div className="w-[200px] h-[100px] bg-blue-300 flex justify-between">
        <div className="w-[80px] h-[30px] bg-red-300">
          div w-300
        </div>
        <span className="w-[80px] h-[40px] bg-red-300">
          div
        </span>
      </div>
      <div className="text-xs absolute ">用 flex 排版  space-between; 中間會自動出現間隔，常用於左右排版的 header 導覽列上。</div>
      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>
    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：內容小於容器   justify-content: center; 搭配 margin + wrap</h1>
      <div className="w-[1000px] h-[100px] bg-blue-300 flex justify-center flex-wrap">
        <div className="w-[500px] h-[30px] bg-red-300  mx-4">
          div w-500
        </div>
        <span className="w-[500px] h-[40px] bg-red-300 mx-4">
          div w-500
        </span>
      </div>
      <div className="text-s absolute ">1000px 用 flex 排版 justify-center 搭配子元素設置 margin 製造出間距 但是卻被換行 因為子元素加上 margin 的大小會不夠</div>
      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>
    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：內容小於容器   justify-content: center; 搭配 margin + wrap+ 子容器設置 flex1</h1>
      <div className="w-[1000px] h-[100px] bg-blue-300 flex justify-center flex-wrap">
        <div className="w-[500px] h-[30px] bg-red-300  mx-4 flex-1">
          div w-500  mx-4(16px) flex-1(flex: 1 1 0%;) = w-468
        </div>
        <div className="w-1/2 h-[40px] bg-red-300 mx-4 flex-1" >
          div w/1/2  mx-4(16px) flex-1 = w-468
        </div>
      </div>
      <div className="text-s  "> 1000px  flex justify-center flex-wrap + flex-1,  </div>
      <div>參數 1: flex-grow 属性定義项目的放大比例，默認为 0 值，即如果存在剩余空间也不放大。</div>
      <div>參數 2: flex-shrink 属性定義了项目的缩小比例，默認為 1 值，即如果空间不足，该项目將缩小。</div>
      <div>參數 3: flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间 (main size)。。它的默认值为 auto，即项目的本来大小。。</div>
      <div> 上述默認值 造成 flex 中會空間夠時不放大空個不 夠時自動縮小</div>
      <div> flex-grow:設置 1 代表平均分配空間，有三個設定 1 就平均 3</div>
      <div>当 flex item 仅设置 flex-basis:0 时，表现上，该 item 会折叠到最小的宽度</div>
      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>
    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：流體佈局：解決自動寬度 用 flex-1 解決</h1>
      <div className="w-full h-[100px] bg-blue-300 flex justify-center flex-wrap ">
        <div className="h-[30px] bg-red-300  m-4 p-1 flex-1 ">
          div m-4(16px) flex-1(flex: 1 1 0%;) = 不用設定寬度 寬度＋margin+padding 會佔據一半
        </div>
        <span className="h-[40px] bg-red-300 m-4  p-1 flex-1" >
          span m-4(16px) flex-1(flex: 1 1 0%;) = 不用設定寬度 寬度＋margin+padding 會佔據一半
        </span>
      </div>
      <div className="text-s  "> 父寬 1504px 子 devMode 只到上面顯示 720px 是內容大小，實際大小是 712+4*2+16*2=752px 剛好佔據一半，就自動計算了，只不過 flex-wrap 沒效果。 </div>

      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>

    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：流體佈局 + 高度問題 </h1>
      <div className="w-full h-[100px]  bg-blue-300 flex justify-center flex-col md:flex-row ">
        <div className="h-[30px] bg-red-300  m-4 p-1 flex-1 ">
          div m-4(16px) flex-1(flex: 1 1 0%;) = 不用設定寬度 寬度＋margin+padding 會佔據一半
        </div>
        <span className="h-[40px] bg-red-300 m-4  p-1 flex-1" >
          span m-4(16px) flex-1(flex: 1 1 0%;) = 不用設定寬度 寬度＋margin+padding 會佔據一半
        </span>
      </div>
      <div className="text-s  "> 設定手機為直排 大螢幕為橫排，原本容器高度固定不會有問題，但用手機看直排空間會不夠而超出去重疊再一起。 </div>

      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>
    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：流體佈局 + 解決手機高度超出問題 </h1>
      <div className="w-full   bg-blue-300 flex justify-center flex-col md:flex-row ">
        <div className="h-1/2 bg-red-300  m-4 p-1 flex-1 ">
          div m-4(16px) flex-1(flex: 1 1 0%;) = 不用設定寬度 寬度＋margin+padding 會佔據一半
        </div>
        <span className="h-1/2 bg-red-300 m-4  p-1 flex-1" >
          span m-4(16px) flex-1(flex: 1 1 0%;) = 不用設定寬度 寬度＋margin+padding 會佔據一半
          span m-4(16px) flex-1(flex: 1 1 0%;) = 不用設定寬度 寬度＋margin+padding 會佔據一半
          span m-4(16px) flex-1(flex: 1 1 0%;) = 不用設定寬度 寬度＋margin+padding 會佔據一半
        </span>
      </div>
      <div className="text-s  "> 上述的父容器不要設定高度，可是父容器不設高度，子容器設置高度 h-1/2 會失效 </div>

      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>

    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：流體佈局 + margin 改成 gap </h1>
      <div className="w-full   bg-blue-300 flex justify-center flex-col md:flex-row gap-2 p-4">
        <div className="h-1/2 bg-red-300  p-1 flex-1 ">
          div m-4(16px) flex-1(flex: 1 1 0%;) = 不用設定寬度 寬度＋margin+padding 會佔據一半
        </div>
        <span className="h-1/2 bg-red-300   p-1 flex-1" >
          span m-4(16px) flex-1(flex: 1 1 0%;) = 不用設定寬度 寬度＋margin+padding 會佔據一半
        </span>
      </div>
      <div className="text-s  "> 子容器不設置 margin 父容器設定 gap-2 取代，父容器再加上點 padding，形如不同效果的間格，這樣不會讓中間間距變成兩倍 margin 大小，更符合設計。 </div>

      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>


    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：多欄的感覺也可以平分，但高度有問題 </h1>
      <div className="w-full   bg-blue-300 flex justify-center flex-col md:flex-row gap-2 p-4">
        <div className="h-1/2 bg-red-300  p-1 flex-1 ">
          div 不用設定寬度會平分，但是高度 h-1/2或是h-full等百分比都會失效，變成內容高度。
        </div>
        <span className="h-[100px] bg-red-300   p-1 flex-1" >
          div 不用設定寬度會平分，高度設定固定高度 h-[100px] 會成功
        </span>
        <div className="h-1/2 bg-red-300  p-1 flex-1 ">
          div 不用設定寬度會平分，但是高度 h-1/2 會失效，變成內容高度。
          div 不用設定寬度會平分，但是高度 h-1/2 會失效，變成內容高度。
          div 不用設定寬度會平分，但是高度 h-1/2 會失效，變成內容高度。
        </div>
        <div className=" bg-red-300  p-1 flex-1 ">
          div 不用設定寬度會平分，高度不設定，auto 會自動填滿
        </div>

      </div>
      <div className="text-s  "> 寬度會平分，高度問題其實應該可以不用去設定讓他自動填滿。 </div>

      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>

    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：多欄的感覺也可以平分，高度不用設定 </h1>
      <div className="w-full   bg-blue-300 flex justify-center flex-col md:flex-row gap-2 p-4">
        <div className=" bg-red-300  p-1 flex-1 ">
          div 不用設定寬度會平分，高度不設定
        </div>
        <span className=" bg-red-300  p-1 flex-1 flex justify-center" >
          div 不用設定寬度會平分，高度不設定
        </span>
        <div className=" bg-red-300  p-1 flex-1 ">
          div 不用設定寬度會平分，高度不設定
          div 不用設定寬度會平分，高度不設定
          div 不用設定寬度會平分，高度不設定
        </div>
        <div className=" bg-red-300  p-1 flex-1 ">
          div 不用設定寬度會平分，高度不設定
          div 不用設定寬度會平分，高度不設定
        </div>

      </div>
      <div className="text-s  "> 寬度會平分，高度問題其實應該可以不用去設定讓他自動填滿，就算變成手機直排也可以發現高度會自動縮小。 </div>

      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>
    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：多欄且不同佔比 flex-1 grow-[2] </h1>
      <div className="w-full   bg-blue-300 flex justify-center flex-col md:flex-row gap-2 p-4">
        <div className=" bg-red-300  p-1 flex-1 grow ">
          div 不用設定寬度會平分，高度不設定
        </div>
        <span className=" bg-red-300  p-1 flex-1 grow-[2] flex justify-center items-center" >
          div 不用設定寬度 flex-grow: 2;會分到兩份寬，高度不設定
        </span>
        <div className=" bg-red-300  p-1 flex-1 ">
          div 不用設定寬度會平分，高度不設定
          div 不用設定寬度會平分，高度不設定
          div 不用設定寬度會平分，高度不設定
        </div>
        <div className=" bg-red-300  p-1 flex-1 ">
          div 不用設定寬度會平分，高度不設定
          div 不用設定寬度會平分，高度不設定
        </div>

      </div>
      <div className="text-s  "> tailwind 中 只有 grow 跟 grow-0,2 以上要用 grow-[2]。 </div>

      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>
    <section className="p-4">
      <h1 className="text-lg font-bold"> flex 排版：多欄且不同佔比 flex-auto </h1>
      <div className="w-full   bg-blue-300 flex justify-center flex-col md:flex-row gap-2 p-4">
        <div className=" bg-red-300  p-1 flex-auto grow ">
          div 不用設定寬度會平分，grow-[2] 無感？？？
        </div>
        <span className=" bg-red-300  p-1 flex-auto grow-[2] flex justify-center items-center" >
          div 不用設定寬度會平分，grow-[2] 無感？？？
        </span>
        <div className=" bg-red-300  p-1 flex-auto ">
          div 不用設定寬度會平分，高度不設定
          div 不用設定寬度會平分，高度不設定
          div 不用設定寬度會平分，高度不設定
          div 不用設定寬度會平分，高度不設定 div 不用設定寬度會平分，高度不設定 div 不用設定寬度會平分，高度不設定 div 不用設定寬度會平分，高度不設定
        </div>
        <div className=" bg-red-300  p-1 flex-auto ">
          div 不用設定寬度會平分，高度不設定
          div 不用設定寬度會平分，高度不設定
        </div>

      </div>
      <div className="text-s  "> flex-auto flex 项目的大小取决于内容。因此，内容越多的 flex 项目就会越大。grow-[2] 無感？？？。 </div>

      <div className="h-[20px] bg-green-600 opacity-30"> </div>
    </section>
  </div>

}
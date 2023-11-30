"use client"

import TaiwanMapFixed from "@/components/TaiwanMapFixed";
import TaiwanMap from "../../../components/TaiwanMap";
import TaiwanMapOne from "@/components/TaiwanMapOne";
import TaiwanMapFixedOne from "@/components/TaiwanMapFixedOne";
import TownMapFixed from "@/components/TownMapFixed";


export default function Page() {
  return <>
    <div className="flex flex-col ">
      <h1 className="text-lg font-bold">地區 D3 實作  <span> -> </span>

        <div >初版地圖 geojson 正常 => 我重新縮放製作 geojson 放大到離島 問題 出現正方塊？？ </div></h1>
      <div className="">

        <div>taiwan.geojson 57KB  初版地圖正常「忘記縮放比了」 |COUNTY.geojson 76 kb「忘記縮放比了」重新製作異常：透過反轉正常修復，「後面版本都有離島資料」  </div>
        <div> 又製作另個 COUNTY_1.json(35KB 0.1% ) 又出現問題 部分正常部分異常？.... !!!!????</div>
        <div> 又製作另個 COUNTY_2.json(50KB 0.01% ) 又正常....? 但這版有點太簡化了 不知道為什麼檔案也偏大？測試 0.03 以下會正常 </div>
        <div> 又製作另個 COUNTY_3.json(75KB 0.08% ) 重新設定 setting  prevent remove 要勾不然會消失，0.08% 正常 </div>
        <div> 結論：後來製作的還是都要反轉，至於設定先以第三版為主去選，符合我要的大小。 ->設定  <a href="/mapshaper.png" className="href">mapshaper</a></div>
        <div> 圖片工具的好處是可以修改自己要的邊緣，可是目前看來是有轉換問題未解，也看過有人把 D3 path 存起來直接用，暫時將上面 COUNTY_3 生成 svg 存起來備用  <a href="/tw.svg" className="href">tw.svg,</a> 但壞處是不能調整邊緣。 </div>
        <div className="flex flex-wrap">
          <div className="w-[250px]">
            <TaiwanMap year={"2020"}></TaiwanMap>
          </div>

          <div className="w-[250px]"> <TaiwanMapFixed year={"2020"} reverse={false} mapPath="/files/COUNTY.geojson"></TaiwanMapFixed>

          </div>
          <div className="w-[500px]"> <TaiwanMapFixed year={"2020"} reverse={true} mapPath="/files/COUNTY.geojson"></TaiwanMapFixed></div>
          <div className="w-[500px]"> <TaiwanMapFixed year={"2020"} reverse={true} mapPath="/files/COUNTY_1.json"></TaiwanMapFixed></div>
          <div className="w-[500px]"> <TaiwanMapFixed year={"2020"} reverse={true} mapPath="/files/COUNTY_2.json"></TaiwanMapFixed></div>
          <div className="w-[500px]"> <TaiwanMapFixed year={"2020"} reverse={true} mapPath="/files/COUNTY_3.json"></TaiwanMapFixed></div>
        </div>
      </div>


      <section className="flex flex-col h-[400px]">
        <h1 className="text-lg font-bold mt-3" >DEBUG:不同圖檔 json 資料 先縮小到一個地區看看，發現整個 path 大小明顯超出 svg, 問題是 SVG 方向性造成反轉填充，</h1>
        <div>與 scale/viewpoint/座標格式「TWD97與WGS84」都無關 PS 下載網址顯示 TWD97 我想是 TWD97(WGS84) 沒錯 </div>
        <div> 改過 svg  <a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule" >fill-rule </a> 填充方式也無用</div>
        <div>解法將座標反轉可解 關鍵字：SVG path reverse invert</div>
        <div className="flex ">

          <div className="w-[300px] h-[200px]">
            <TaiwanMapOne year={"2020"}></TaiwanMapOne>
          </div>
          <div className="w-[300px] h-[200px]">
            <TaiwanMapFixedOne year={"2020"} reverse={false}></TaiwanMapFixedOne>
            <div> 換了一個 geojson 座標檔案 程式碼沒變 不知道為什麼圖型反轉填充</div>
          </div>
          <div className="w-[300px] h-[200px]">
            <TaiwanMapFixedOne year={"2020"} reverse={true}></TaiwanMapFixedOne>
            <div> 我將 geojson 座標反轉排序後正常</div>
          </div>

        </div>
      </section>

      <section className="flex flex-col h-[800px]">
        <h1>鄉鎮</h1>
        <div className="flex">
          <div className="w-[800px] h-[600px]"> <TownMapFixed year={"2020"} reverse={true} mapPath="/files/TOWN.json"></TownMapFixed></div>
          <div className="w-[500px] h-[600px]"> <TownMapFixed year={"2020"} reverse={true} mapPath="/files/TOWN.json" area="宜蘭縣"></TownMapFixed></div>
          <div className="w-[500px] h-[600px]"> <TownMapFixed year={"2020"} reverse={true} mapPath="/files/TOWN.json" area="臺南市"></TownMapFixed></div>
        </div>

      </section>


    </div>
  </>
}
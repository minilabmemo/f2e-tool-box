"use client"
import Carousel from "@/components/Carousel";
import SimpleSlider from "@/components/Slick";

export default function Page() {
  return <div>
    <div className="h-[30px]">這個網路版本教學雖然可以重複循環，但是回到一個明顯卡卡，如果顯示一個看不太出來，所以套用後也有問題...</div>
    <ul>
      <Carousel>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </Carousel>
    </ul>

    <div className="h-[30px]">使用套件 樣式其實蠻好改的</div>

    <SimpleSlider></SimpleSlider>

  </div>

}
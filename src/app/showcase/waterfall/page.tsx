import Image from 'next/image'

function Content() {
  // 重複的內容
  const repeatedContent = Array.from({ length: 20 }, (_, index) => {

    const width = 200;
    const height = Math.floor(Math.random() * (500 - 100 + 1)) + 100;//100~500
    return (
      <div key={index} className="item bg-cyan-100 box-border text-center m-1 p-5 break-inside-avoid	" style={{ width: `${width}px` }}>

        <Image className='w-full object-cover object-center' src={`https://picsum.photos/id/${index + 10}/${width}/${height}`} alt={`picsum-${index + 10}`} width={width} height={height}></Image>
        <p>{`No. ${index + 1} card`}</p>
      </div>
    );
  });

  return (
    <div>
      {repeatedContent}
    </div>
  );
}



export default function Page() {
  return <>

    <div className="waterfall container  w-full m-auto columns-5  gap-10 ">
      <Content />

    </div>
  </>


}
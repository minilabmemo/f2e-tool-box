"use client"

import { resolve } from 'path';
import React, { useEffect, useRef, useState } from 'react';

function MyComponent() {
  console.log("🚀 ~ file: page.tsx:7 ~ MyComponent ")
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  console.log("🚀 data", data)
  console.log("🚀 data2", data2)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => {
          setTimeout(resolve, 3000);
        });
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => { setTimeout(resolve, 1000); });
        const response = await fetch('https://random-data-api.com/api/v2/users?size=1&is_xml=true');
        const result = await response.json();
        setData2(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();

    return () => {
      console.debug(" return ~ setData2(null):")
      setData2(null);
    };

  }, []);



  useEffect(() => {
    console.log("#1 這個 useEffect 依賴 [] 只會執行第一次")
  }, []);
  useEffect(() => {
    console.log("#2 這個 useEffect 沒有給依賴 在第一次跟更新都會執行，也就是無論如何都會執行")
  });
  useEffect(() => {
    console.log("#3 這個 useEffect 有依賴 data2  變時會執行")
  }, [data2]);

  useEffect(() => {
    console.log("#4 這個 useEffect 依賴 [] 只會執行第一次")
    return () => {
      console.debug("#4 這個 useEffect 依賴 [] return")
    };
  }, []);
  useEffect(() => {
    console.log("#5 這個 useEffect 沒有給依賴 在第一次跟更新都會執行，也就是無論如何都會執行")
    return () => {
      console.debug("#5 這個 useEffect 沒有給依賴   return")
    };
  });
  useEffect(() => {
    console.log("#6 這個 useEffect 有依賴 data2  變時會執行")
    return () => {
      console.debug("#6 這個 useEffect  有依賴 data2   return")
    };
  }, [data2]);
  return (
    <>
      <div>
        {console.log('render')}
        {data ? (
          <p>Data received: {JSON.stringify(data)}</p>
        ) : (
          <p>data Loading...</p>
        )}
      </div>

      <div>
        {data2 ? (
          <p>Data received: {JSON.stringify(data2)}</p>
        ) : (
          <p>data2 Loading...</p>
        )}
      </div>

    </>
  );
}

// function VideoPlayer({ src, isPlaying }: { src: string, isPlaying: boolean }) {
//   const ref = useRef<HTMLVideoElement | null>(null);
//   useEffect(() => {
//     if (ref.current) {
//       if (isPlaying) {
//         ref.current.play();
//       } else {
//         ref.current.pause();
//       }
//     }
//   }, [isPlaying]);

//   return <video ref={ref} src={src} loop playsInline />;
// }


// export default function Page() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   return <>
//     <button onClick={() => setIsPlaying(!isPlaying)}>
//       {isPlaying ? '暂停' : '播放'}
//     </button>
//     <VideoPlayer
//       isPlaying={isPlaying}
//       src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//     />
//   </>
// }




function Life() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log("這裡會在每次渲染後都執行", count)
    return () => {
      console.log("清理函數：每次渲染後重新执行 Effect 之前")
    };
  });

  useEffect(() => {
    console.log("這裡會在每次掛載後都執行", count)
    return () => {
      console.log("清理函數：每次掛載前")
    };
  }, []);

  useEffect(() => {
    console.log("這裡會在每次渲染後 count 值與上次不一樣時執行", count)
    return () => {
      console.log("清理函數：渲染後 count 值與上次不一樣時前")
    };
  }, [count]);

  //會發現所有的 useEffect 都是在 return 之後
  return (

    <div>
      {console.log("render", count)}
      <button onClick={() => setCount((prev) => prev + 1)}>
        Clicked {count} times
      </button>
    </div>
  )
}


export default function App() {
  const [show, setShow] = useState(false)
  return <>

    <button onClick={() => setShow(!show)}>
      parent 重載 Life
    </button>

    <div className="border "></div>
    {/* {show && <Life />} */}
    {/* Life2  : {show && <Life2 />} */}
    <Life3 />
  </>
}



function Life1() {
  console.log(" Life1 ")
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("這裡會在每次渲染後都執行", count)
    return () => {
      console.log("清理函數", count)
    };
  });

  return (

    <div>
      {console.log("render", count)}
      <button onClick={() => setCount((prev) => prev + 1)}>
        Clicked {count} times
      </button>
    </div>
  )
}


function Life2() {
  // console.log(" Life2 ")
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("這裡會只會在掛載後執行", count)
    return () => {
      console.log("清理函數", count)
    };
  }, []);

  return (

    <div>
      {console.log("render", count)}
      <button onClick={() => setCount((prev) => prev + 1)}>
        Clicked {count} times
      </button>
    </div>
  )
}



function Life3() {
  console.log(" Life3 ")
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("這裡會只會在 count 改變執行", count)
    return () => {
      console.log("清理函數", count)
    };
  }, [count]);

  return (

    <div>
      {console.log("render", count)}
      <button onClick={() => setCount((prev) => prev + 1)}>
        Clicked {count} times
      </button>
    </div>
  )
}

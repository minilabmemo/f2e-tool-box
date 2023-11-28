

export default function Page() {
  return <div>

    <div className="relative w-20 h-20">
      <div className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden">
        <span className="text-pink-500 text-lg font-bold z-10">75%</span>
        <div
          className="absolute top-0 left-0 w-full h-full border-4 rounded-full"
          style={{
            backgroundImage: 'conic-gradient(from 0deg at 50% 50%, #ff69b4 0%, #ff69b4 75%, #ccc 75%, #ccc 100%)',
            borderImageSlice: 1,
          }}
        ></div>
      </div>
    </div>
    <div className="relative w-20 h-20">
      <div
        style={{
          backgroundImage: 'conic-gradient(from 0deg at 50% 50%, #ff69b4 0%, #ff69b4 75%, #ccc 75%, #ccc 100%)',
          borderImageSlice: 1,
        }}
        className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden"
      >
        <div
          className="absolute top-2 left-2 w-16 h-16 rounded-full"
          style={{ backgroundColor: 'white' }}
        ></div>
        <span className="text-pink-500 text-lg font-bold z-10">75%</span>
      </div>
    </div>

  </div>

}
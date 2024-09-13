
function App() {

  return (
    <div className="text-white w-[330px] h-[450px] m-auto  mt-16 rounded-2xl overflow-hidden shadow-2xl ">
      <div className="bg-gray-600 w-100 h-[120px] text-right pr-2">
        <div className="ml-3 pt-3">
          <ul className="pl-0 flex items-center gap-x-3">
            <li className="w-6 h-6 rounded-full bg-red-500"></li>
            <li className="w-6 h-6 rounded-full bg-orange-400"></li>
            <li className="w-6 h-6 rounded-full bg-green-500"></li>
          </ul>  
        </div>

        <p className="text-6xl ">0</p>
      </div>

      <div className="bg-gray-500 w-100 h-[330px] ">
        <ul className="flex flex-wrap text-center w-100 h-100 text-3xl " >
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center bg-gray-700">A/C</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center bg-gray-700">+/-</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center bg-gray-700">%</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center bg-yellow-600">÷</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center">7</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center">8</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center">9</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center bg-yellow-600">×</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center">4</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center">5</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center">6</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center bg-yellow-600">－</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center">1</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center">2</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center">3</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center bg-yellow-600">＋</li>
          <li className="w-1/2 h-[66px] leading-loose border border-black text-center">0</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center">.</li>
          <li className="w-1/4 h-[66px] leading-loose border border-black text-center bg-yellow-600">=</li>

        </ul>

      </div>
    </div>
  )
}

export default App

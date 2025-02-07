import { useState } from "react";

function App() {
  const [color, setColor] = useState("white"); // Define state

  return (
    <>
      <div className="flex justify-center items-center h-screen" style={{ backgroundColor: color }}>
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-row gap-4">
          <button onClick={() => setColor("red")} className="px-4 py-2 bg-red-700 text-white rounded-lg">Red</button>
          <button onClick={() => setColor("blue")} className="px-4 py-2 bg-blue-700 text-white rounded-lg">Blue</button>
          <button onClick={() => setColor("green")} className="px-4 py-2 bg-green-700 text-white rounded-lg">Green</button>
          <button onClick={() => setColor("pink")} className="px-4 py-2 bg-pink-700 text-white rounded-lg">Pink</button>
          <button onClick={() => setColor("yellow")} className="px-4 py-2 bg-yellow-700 text-white rounded-lg">Yellow</button>
          <button onClick={() => setColor("white")} className="px-4 py-2 bg-gray-300 text-black rounded-lg">White</button>
        </div>
      </div>
    </>
  );
}

export default App;

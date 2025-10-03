import React from 'react';
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col p-4">
      <h3 className="text-center text-3xl font-bold my-4">CS Labs</h3>

      <hr className="border-gray-300 my-4 border-t-2 w-1/2 mx-auto" />
      <h4 className="text-center text-2xl font-bold mb-4">Lab 1</h4>
      <div className="flex flex-col items-center justify-center space-y-4">
        <a href="lab1/task1" className="w-full max-w-xs">
          <button className="w-full py-3 px-6 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300">
            Task 1.1
          </button>
        </a>
        <a href="/lab1/task2" className="w-full max-w-xs">
          <button className="w-full py-3 px-6 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300">
            Task 1.2
          </button>
        </a>
      </div>

      <hr className="border-gray-300 my-4 border-t-2 w-1/2 mx-auto" />
      <h4 className="text-center text-2xl font-bold mb-4">Lab 2</h4>
    </div>
  )
}

export default App
import React from 'react';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col ">
      <h3 className="text-center">CS Labs</h3>
        <div className="flex flex-col items-center justify-center">
          <a href="/lab1">
            <button className="w-3 bg-amber-300">Lab1</button>
          </a>
          <a href="/lab2">lab2</a>
          <a href="/lab3">lab3</a>
          <a href="/lab4">lab4</a>
        </div>
    </div>
  )
}

export default App
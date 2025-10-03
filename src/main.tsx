import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router";
import App from './App.tsx'
import Task1 from "./lab1/task1.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/lab1/task1' element={<Task1 />} />
      <Route path='/lab1/task2' element={<Task1 />} />
    </Routes>
  </BrowserRouter>,
)
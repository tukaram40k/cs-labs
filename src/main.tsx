import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router";
import App from './App.tsx'
import Lab1 from "./lab1/lab1.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/lab1' element={<Lab1 />} />
    </Routes>
  </BrowserRouter>,
)
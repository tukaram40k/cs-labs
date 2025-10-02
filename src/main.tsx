import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/lab1' element={<App />} />
    </Routes>
  </BrowserRouter>,
)
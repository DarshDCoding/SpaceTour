import {Route, Routes} from 'react-router'
import { HomePage } from './Pages/HomePage'
import { DestinationPage } from './Pages/DestinationPage.jsx'
import {CrewPage} from "./Pages/CrewPage.jsx";
import {TechnologyPage} from "./Pages/TechnologyPage.jsx";
import './App.css'


function App() {

  return (
    <>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="destination" element={<DestinationPage />} />
          <Route path="crew" element={<CrewPage />} />
          <Route path="technology" element={<TechnologyPage />} />
      </Routes>
    </>
  )
}

export default App

import {Route, Routes} from 'react-router'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { AnotherPage } from './Pages/AnotherPage'


function App() {

  return (
    <>
      <Routes>
        <Route
            index
            element={<HomePage />}
        />
          <Route
              path="another"
              element={<AnotherPage />}
          />
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './component/home/HomePage'
import CombinedPage from './component/combined/CombinedPage'
import { MyContextProvider } from './source/context/MyContext'
import DetailsPage from './component/combined/DetailsPage'

function App() {
  // const [count, setCount] = useState(0)

  return (

      <div className='container'>
        <MyContextProvider>
        <Routes>
          <Route path='/' element={<HomePage />} /> 
        </Routes>
        <Routes>
          <Route path='/combinedPage' element={<CombinedPage />} /> 
        </Routes>
        <Routes>
          <Route path='/details' element={<DetailsPage />} /> 
        </Routes>
        </MyContextProvider>
      </div>
      





    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
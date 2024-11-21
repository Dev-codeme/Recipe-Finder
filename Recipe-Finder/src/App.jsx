// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import Component from "./Component"
export default function App() {
  return (
    <>
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
    <div className="w-full max-w-md">
      {/* <div className="flex justify-center items-center m-3 w-full max-w-lg mx-auto">
        <input type="text" className="border-2 mr-1 border-gray-300 focus:border-blue-400 focus:outline-none p-2 w-full rounded-lg text-gray-700" placeholder="Search for recipes..."/>
        <button className="bg-blue-400 ml-1 text-white font-semibold p-2 w-24 rounded-lg hover:bg-blue-600 transition">Search</button>
      </div> */}
      <Component/>
    </div>
    </div>
    </>
  )
}

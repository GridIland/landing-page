import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Prices from './components/Prices'
import Team from './components/Team'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'

function App() {
  const [count] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 dark:text-white">
      {/* Navbar now contains the theme toggle */}
      <Navbar />
      <Prices />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App

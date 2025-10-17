import { ThemeProvider } from './components/Mode'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Team from './components/Team'
import Newsletter from './components/Newsletter'
import Testimonials from './components/Testimonials'
import Prices from './components/Prices'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Prices />
      <Testimonials />
      <Team />
      <Contact />
      <Newsletter />
      <Footer />
    </ThemeProvider>
  )
}

export default App
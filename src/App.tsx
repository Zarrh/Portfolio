import './App.css'
import Education from './views/Education'
import Footer from './views/Footer'
import Hero from './views/Hero'
import Languages from './views/Languages'
import Navbar from './views/Navbar'
import Projects from './views/Projects'
import TechStack from './views/TechStack'
import Gradient from './components/Gradient'

function App() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Gradient x={115} y={100} width={60} height={90} />
      <Education />
      <TechStack />
      <Projects />
      <Languages />
      <Footer />
    </main>
  )
}

export default App

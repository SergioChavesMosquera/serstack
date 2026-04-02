import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Services from './components/Services'
import Projects from './components/Projects'
import SocialProof from './components/SocialProof'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TechStack from './components/TechStack'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1F]">
      <Navbar />
      <Hero />
      <TechStack />
      <Problem />
      <Solution />
      <Services />
      <Projects />
      <SocialProof />
      <Contact />
      <Footer />
    </main>
  )
}
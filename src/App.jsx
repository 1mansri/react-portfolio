import Navbar from "./components/Navbar"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Portfolio } from "./components/Portfolio"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import { SocialCard } from "./components/SocialCard"

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialCard />

      </div>
    </>
  )
}

export default App

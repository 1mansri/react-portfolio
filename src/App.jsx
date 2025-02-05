import Navbar from "./components/Navbar"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Portfolio } from "./components/Portfolio"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import { SocialLink } from "./components/SocialLink"
import { NewButton } from "./components/NewButton"
function App() {

  return (
    <>
      <div className="flex flex-col min-w-full " >
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLink />
      </div>
    </>
  )
}

export default App

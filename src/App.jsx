import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import UserSection from "./components/UserSection"
function App() {

  return (
    <>
      <div className="max-w-[1440px] w-[94%] mx-auto">
          <Navbar/>  
          <Hero/>
          <UserSection/>
      </div> 
    </>
  )
}

export default App

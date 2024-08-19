import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
function App() {
 
  return (
    <>
     <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-8 md:px-10 md:py-6 md:justify-between lg:px-16 lg:py-10">
     <Header></Header>
     <Body></Body>
     <Footer></Footer>
     </div>
    </>
  )
}

export default App

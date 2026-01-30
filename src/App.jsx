import { Route, Routes } from "react-router-dom"
// import Home from "./pages/Home"
import Header from "./components/common/header/Header"
import Home from "./pages/Home/Home"
import Footer from "./components/common/footer/Footer"
import AllProducts from "./pages/All Products/AllProducts"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop-all" element={<AllProducts/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

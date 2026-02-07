import { Route, Routes } from "react-router-dom"
import Header from "./components/common/header/Header"
import Home from "./pages/Home/Home"
import Footer from "./components/common/footer/Footer"
import AllProducts from "./pages/All Products/AllProducts"
import SkinAnalysis from "./pages/Skin Analysis/SkinAnalysis"
import NewLaunch from "./pages/New Launch/NewLaunch"
import Gifting from "./pages/Gifting/Gifting"
import BestSellers from "./pages/Best Sellers/BestSellers"
import Bundles from "./pages/Bundles/Bundles"
import CreateBundle from "./pages/Create Bundle/CreateBundle"
import SkinCare from "./pages/Skin Care/SkinCare"
import HairCare from "./pages/Hair Care/HairCare"
import TrackOrder from "./pages/Track Order/TrackOrder"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop-all" element={<AllProducts/>} />
        <Route path="/new-launch" element={<NewLaunch/>} />
        <Route path="/gifting" element={<Gifting/>} />
        <Route path="/best-sellers" element={<BestSellers/>} />
        <Route path="/bundles" element={<Bundles/>} />
        <Route path="/create-bundle" element={<CreateBundle/>} />
        <Route path="/skin-care" element={<SkinCare/>} />
        <Route path="/hair-care" element={<HairCare/>} />
        <Route path="/track-order" element={<TrackOrder/>} />
        <Route path="/skin-analysis" element={<SkinAnalysis/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

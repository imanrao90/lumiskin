import { useEffect, useState } from 'react'
import HeaderPromo from './HeaderPromo'
import HeaderMain from './HeaderMain'
import Navbar from './Navbar'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${isScrolled ? 'shadow-lg shadow-slate-200/50' : ''}`}>
    <HeaderPromo isHidden={isScrolled}/>
    <HeaderMain isScrolled={isScrolled}/>
    <Navbar isScrolled={isScrolled}/>
    </header>
  )
}

export default Header
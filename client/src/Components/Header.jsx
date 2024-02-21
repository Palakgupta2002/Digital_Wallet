import { Button, Navbar } from 'flowbite-react'
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <div>
    <Navbar fluid rounded className=' bg-gradient-to-r from-pink-200 to-orange-300 '>
 <Navbar.Brand>
   <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
   <span className="self-center text-xl bg-gradient-to-r from-pink-600 to-orange-800 bg-clip-text text-transparent">Digital Wallet</span>
 </Navbar.Brand>
 <Navbar.Toggle />
 <Navbar.Collapse className='text-center gap-10'>
 <>
 <Button gradientDuoTone="pinkToOrange" outline >Home</Button>
 <Button gradientDuoTone="pinkToOrange" outline >Profile</Button>
 <Button gradientDuoTone="pinkToOrange" outline >Logout</Button>
 </>
 </Navbar.Collapse>
</Navbar>
</div>
  )
}

export default Header
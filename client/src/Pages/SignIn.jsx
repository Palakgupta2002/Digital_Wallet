import { Button, Label, TextInput } from 'flowbite-react';
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='flex w-full justify-center'>
    <div className=' w-full max-w-md  shadow-lg pb-4'>
        <div className='flex w-full  justify-start mt-10'>
            <img width={"90px"} src={Logo} />
            <span className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>
                Digital Wallet
            </span>

        </div>
        <form className="flex flex-col gap-4 p-10">
            <div>
                <div className="mb-2 block text-left">
                    <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput id="email" type="email" placeholder='digitalwallet@gmail.com' required shadow />
            </div>
            <div>
                <div className="mb-2 block text-left">
                    <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" placeholder='*****' type="password" required shadow />
            </div>
            <Button gradientDuoTone="pinkToOrange" type="submit">Login</Button>
        </form>
        <span className='flex justify-center gap-2' >
            <span>Alredy have an Account ?</span>
            <span className='bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>
              <Link to="/">
                Sign Up
              </Link>
                </span>
        </span>
    </div>

</div>
  )
}

export default SignIn
'use client';

import { Alert, Button, Label, TextInput } from 'flowbite-react';
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import Link from 'next/link';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
      });
      const [errorMessage, setErrorMessage] = useState(null);
      const [loading, setLoading] = useState(false);
    
      const handlechange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value
        });
      }
    
      const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
          return setErrorMessage("All fields are required");
        }
        try {
          setLoading(true);
          setErrorMessage(null);
          const res = await fetch('http://localhost:3000/auth/signUp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          console.log(res, "hello response")
          if (res.ok) {
            setFormData({});
            setLoading(false);
            alert("Sign up succesfully")

            // Redirect or show success message after successful signup
          } else {
            setErrorMessage(data.message);
            setLoading(false);
          }
        } catch (error) {
          setErrorMessage(error.message);
          setLoading(false);
        }
      };

    return (
        <div className='flex w-full justify-center'>
            <div className=' w-full max-w-md  shadow-lg pb-4'>
                <div className='flex w-full  justify-start mt-10'>
                    <img width={"90px"} src={Logo} />
                    <span className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>
                        Digital Wallet
                    </span>

                </div>
                <form className="flex flex-col gap-4 p-10" onSubmit={handleFormSubmit} >
                    <div>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="email2" value="Your Username" />
                        </div>
                        <TextInput id="username" type="text" placeholder="Digital_Wallet_User" required shadow onChange={handlechange} />
                    </div>
                    <div>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput id="email" type="email" placeholder='digitalwallet@gmail.com' required shadow onChange={handlechange} />
                    </div>
                    <div>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput id="password" placeholder='*********' type="password" required shadow onChange={handlechange} />
                    </div>
                    <Button gradientDuoTone="pinkToOrange" type="submit">
                        {
                            loading ? "Loading":"Ragister"
                        }
                    </Button>
                </form>
                {
                    errorMessage ? <Alert className='text-center bg-orange-400' >{errorMessage}</Alert>:""
                }
                <span className='flex justify-center gap-2' >
                    <span>Alredy have an Account ?</span>
                    <span className='bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>
                        <Link to="/login" >SignIn</Link>
                        </span>
                </span>
            </div>

        </div>
    )
}

export default SignUp

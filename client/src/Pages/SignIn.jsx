import { Alert, Button, Label, TextInput } from 'flowbite-react';
import Logo from "../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { EmailContext } from "../App"


const SignIn = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const { setEmail } = useContext(EmailContext);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setErrorMessage(null);
            const res = await fetch('https://digital-wallet-backend-falh.onrender.com/validateAuth/signIn', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                // Set email using setEmail from context
                setEmail(formData.email);

                alert("Sign In succesfully")
                navigate('/Home')

            } else {
                setErrorMessage(data.message);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again later.');
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
                <form className="flex flex-col gap-4 p-10" onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput id="email" type="email" placeholder='digitalwallet@gmail.com' onChange={handleChange} required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput id="password" placeholder='*****' type="password" onChange={handleChange} required shadow />
                    </div>
                    <Button gradientDuoTone="pinkToOrange" type="submit">
                        {
                            loading ? "Loading" : "Login"
                        }
                    </Button>
                </form>
                {
                    errorMessage ? <Alert className='text-center bg-orange-400' >{errorMessage}</Alert> : ""
                }
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
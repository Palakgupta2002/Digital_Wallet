import { useState } from "react"
import "../App.css"
import Logo from "../assets/logo.png"
import visa from "../assets/visa.svg"
import wifi from "../assets/wifi.svg"

const PaymentForm = () => {
    const [front, setFront] = useState(false);

    const handleFlip = () => {
        setFront(!front);
    };

    return (
        <div className="flex justify-center md:pl-10 text-white ">
            <div
                onClick={handleFlip}
                className={`creditCard p-10 bg-gradient-to-r from-pink-500 to-orange-500 h-60 mt-10 shadow-lg rounded-lg ${front ? 'flip' : ''}`}
            >
                {front ? (
                    <div className="front">
                        <div className="flex justify-between">
                            <div className='flex w-full  justify-start '>
                                <img width={"50px"} src={Logo} />
                                <span className='text-2xl font-bold text-nowrap'>
                                    Digital Wallet
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="flex mt-3 w-3/4 gap-5">
                                <img width={"40px"} src={visa} />
                                <img width={"30px"} src={wifi} />
                            </div>
                            <div className="mt-6">
                                <span className="text-black text-xl">1234-4567-7890-0000</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-black text-sm">Exp. End: 11/28</div>
                            <div className="flex justify-between mb-10">
                                <span className="text-black text-sm">Digital Wallet</span>
                                <img width={"44px"} src={Logo} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500">
                        <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-6 rounded-lg">
                            <div className="flex items-center justify-center mb-4">
                                <img src="profile-image.jpg" className="w-16 h-16 rounded-full" alt="Profile" />
                            </div>
                            <div className="text-white text-center">
                                <h2 className="text-lg font-bold">John Doe</h2>
                                <p className="text-sm">Web Developer</p>
                                <p className="text-sm">Location: New York</p>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}

export default PaymentForm;

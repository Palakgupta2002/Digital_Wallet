import { useState } from "react"
import "../App.css"
import Logo from "../assets/logo.png"
import visa from "../assets/visa.svg"
import wifi from "../assets/wifi.svg"
import { useContext } from "react"
import { EmailContext } from "../App"
import useUser from "../utils/getUser"

const PaymentForm = () => {
    const [front, setFront] = useState(false);
    const { email } = useContext(EmailContext);
    const user = useUser(email);

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
                            <div className='flex w-full justify-start '>
                                <img width={"50px"} src={Logo} alt="Logo" />
                                <span className='text-2xl font-bold text-nowrap'>
                                    Digital Wallet
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="flex mt-3 w-3/4 gap-5">
                                <img width={"40px"} src={visa} alt="Visa" />
                                <img width={"30px"} src={wifi} alt="Wifi" />
                            </div>
                            <div className="mt-6">
                                <span className="text-black text-xl">1234-4567-7890-0000</span>
                            </div>
                        </div>
                        <div>
                            <div className=" text-sm">Exp. End: 11/28</div>
                            <div className="flex justify-between mb-10">
                                <span className=" text-sm">Digital Wallet</span>
                                <img width={"44px"} src={Logo} alt="Logo" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500">
                        <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-6 rounded-lg">
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black  font-bold text-lg">
                                    {user && user.username && user.username.substring(0, 2).toUpperCase()}
                                </div>
                            </div>
                            <div className="text-white text-center">
                                <h2 className="text-lg font-bold">{user && user.username}</h2>
                                <p className="text-sm">Rupees {user && user.Money}/-</p>
                            </div>
                            <div className="flex justify-between">
                                <span className=" text-sm">Digital Wallet</span>
                                <img width={"44px"} src={Logo} alt="Logo" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PaymentForm;




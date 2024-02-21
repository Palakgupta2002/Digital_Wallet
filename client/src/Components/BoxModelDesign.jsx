
import PaymentForm from "./CreditCard"
import Searching from "./Serching"



const BoxModelDesign = () => {
  return (
    <div className="block w-full md:flex justify-center  h-full gap-10 ">
        <div className="w-full h-screen ">
            <div className= "border-2 h-1/2  border-solid border-yellow-400 w-full md:"  >
                <PaymentForm/>
            </div>
            <div className="border-2 h-1/2 border-solid border-yellow-500 w-full md:" >categry wised cards</div>
        </div>
        <div className=" w-full border-2 border-solid h-screen border-yellow-700 md: ">
        <Searching/>
            <span>history</span>
            </div>
        
    </div>
  )
}

export default BoxModelDesign
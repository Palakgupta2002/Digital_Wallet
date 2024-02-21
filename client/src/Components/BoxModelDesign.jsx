import CardsOfCat from "./CardsOfCat"
import PaymentForm from "./CreditCard"
import History from "./History"

const BoxModelDesign = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
      <div className=" md:flex-row items-stretch w-full md:w-1/2 gap-10">
        <div className=" flex-grow">
          <PaymentForm/>
        </div>
        <div className=" flex-grow mt-10 md:mt-0">
          <CardsOfCat/>
        </div>
      </div>
      <div className="flex-grow  mt-10 md:mt-0">
        <History/>
      </div>
    </div>
  )
}

export default BoxModelDesign;

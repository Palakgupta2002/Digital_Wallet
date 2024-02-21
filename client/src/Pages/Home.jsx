import AddMoney from "../Components/AddMoney"
import AddTransaction from "../Components/AddTransaction"
import BoxModelDesign from "../Components/BoxModelDesign"
import Header from "../Components/Header"
const Home = () => {
  return (
    <div>
      <Header />
      <div className="border-2 border-solid border-red-700 flex justify-between mt-5" >
        <AddMoney />
        <AddTransaction />
      </div>
      <BoxModelDesign />
    </div>
  )
}

export default Home
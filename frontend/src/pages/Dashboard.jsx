import TotalBalanceDisplay from "../components/dashboard/TotalBalanceDisplay"
import Transaction from "../components/dashboard/Transaction"
import TransactionForm from "../components/dashboard/TransactionForm"
import Navbar from "../components/Navbar"

const Dashboard = () => {
  return (
    <section>
      <Navbar />
      <div className='flex flex-row justify-center overflow-hidden'>
        <div className='w-[33%] h-fit  flex flex-col  items-center '>
            <TotalBalanceDisplay />
            <TransactionForm />
        </div>
        <div className='w-[33%] h-fit  flex flex-col  items-center justify-around overflow-hidden'>
            <Transaction />
            <Transaction />
            <Transaction />
           
        </div>
        <div className='w-[33%] h-[500px] bg-red-600'></div>
    </div>
    </section>
  )
}

export default Dashboard

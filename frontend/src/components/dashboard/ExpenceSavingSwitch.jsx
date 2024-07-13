
const ExpenceSavingSwitch = ({ isExpense, setIsExpense }) => {
    return (
      <div className={`relative w-[240px] mt-4 rounded-md border h-10 p-1 ${isExpense ? 'bg-[#FA7070]' : 'bg-[#8DECB4]'}`}>  
        <div className='flex flex-row'>
          <div onClick={() => setIsExpense(true)} className="w-full h-[30px] flex justify-center items-center text-gray-600 cursor-pointer">
            <button>Expenses</button>
          </div>
          <div onClick={() => setIsExpense(false)} className="w-full h-[30px] flex justify-center text-gray-300 cursor-pointer items-center">
            <button>Incomes</button>
          </div>
        </div>
        <span className={`shadow text-sm flex items-center justify-center w-1/2 rounded h-[1.88rem] transition-all duration-150 ease-linear top-[4px] absolute ${isExpense ? 'left-1 text-white font-semibold bg-[#E72929]' : 'left-1/2 -ml-1 text-white bg-[#41B06E] font-semibold'}`}>
          {isExpense ? "Expenses" : "Incomes"}
        </span>
      </div>
    );
  };
  
  export default ExpenceSavingSwitch;
  


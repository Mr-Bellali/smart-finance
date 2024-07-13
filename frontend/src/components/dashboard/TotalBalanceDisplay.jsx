const TotalBalanceDisplay = () => {
  return (
        <div className='w-[400px] h-[130px] 
                      bg-white border-2 
                      border-zinc-200 
                        rounded-[15px] 
                        flex flex-col 
                        overflow-hidden
                        mt-5'>
            <div className='w-[100%] h-[50%]
                            flex flex-col 
                            justify-center
                            items-center
                            '>
                <h3 className=' text-sm text-[#7D7373]'>
                    Total balance
                </h3>
                <h2 className='text-2xl font-bold'>
                    $280,000
                </h2>
            </div>
            <div className='w-[100%] h-[50%] 
                            flex flex-row 
                            justify-between 
                            items-center
                            px-5
                            '>
                <div className='flex flex-col items-center'>
                    <h3 className=' text-sm text-[#7D7373]'>
                        Total incomes
                    </h3>
                    <h2 className='text-2xl font-bold text-[#41B06E]'>
                        $280,000
                    </h2>
                </div>
                <div className='flex flex-col items-center'>
                    <h3 className=' text-sm text-[#7D7373]'>
                        Total expences
                    </h3>
                    <h2 className='text-2xl font-bold text-[#E72929]'>
                        $280,000
                    </h2>
                </div>
            </div>
        </div>
    
  )
}

export default TotalBalanceDisplay
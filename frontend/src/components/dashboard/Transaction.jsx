
const Transaction = () => {
  return (
    <div className='w-[400px] h-[100px]  border-2 rounded-xl flex overflow-hidden mb-3'>
      <div className='w-[25%] h-full  flex justify-center items-center'>
        <div className='w-[80px] h-[80px]  border-2 rounded-xl'>

        </div>
      </div>
      <div className='w-[50%] h-full  flex flex-col justify-evenly pl-5 py-2'>
        <h2 className='text-2xl font-bold'>
            Chese pizza
        </h2>
        <h3 className=' text-sm text-[#7D7373]'>
            food
        </h3>
      </div>
      <div className='w-[25%] h-full flex flex-col justify-around items-center py-2'>
        <h2 className='text-2xl font-semibold text-[#E72929]'>
            -$20
        </h2>
        <h3 className=' text-sm text-[#7D7373]'>
          Apr 24 2024
        </h3>
      </div>
    </div>
  )
}

export default Transaction
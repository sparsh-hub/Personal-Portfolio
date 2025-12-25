import React from 'react'

const Loader = () => {
  return (
    <div className='fixed inset-0 flex flex-col justify-center items-center bg-[#023020] z-50'>
        <div className='w-16 h-16 border-4 border-t-[#00ff9f] border-b-transparent border-l-transparent border-r-transparent rounded-full animate-spin'></div>
        <p className="mt-4 text-[#00ff9f] text-3xl font-semibold animate-pulse">
          Hi Sparsh Here
      </p>
        <p className="mt-4 text-[#00ff9f] text-lg font-semibold animate-pulse">
          <img src="/sign.gif" alt="Sign" className="mx-auto" />
      </p>
    </div>
  )
}

export default Loader
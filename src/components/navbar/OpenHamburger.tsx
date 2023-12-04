import IT from './majorList/IT'
import Engineering from './majorList/Engineering'
import FiET from './majorList/FiET'


const OpenHamburger = () => {
  return (
    <div className='fixed h-full w-1/4  bg-slate-100 m-0 overflow-scroll no-scrollbar'>
      <div className='flex flex-row justify-start m-8 items-center'>
        <img className='w-10 h-10' src="/assets/navbars/x-thin.svg" alt="x_icon" />
        <span className='font-margarine ml-5 text-3xl'>MENU</span>
      </div>
      <div className='flex flex-row justify-between'>
        <span className='font-margarine underline ml-8 text-2xl'>SIT</span>
        <div className='flex mr-8'>
          <img className='w-10 h-15' src="/assets/navbars/Plus_symbol.svg" alt="plus_icon" />
          <img className='w-5 h-15' src="/assets/navbars/minus-icon.png" alt="minus_icon" />
        </div>
      </div>
      <IT></IT>
      <div className='flex flex-row justify-between mt-8'>
        <span className='font-margarine underline ml-8 text-2xl'>Engineering</span>
        <div className='flex mr-8'>
          <img className='w-10 h-15' src="/assets/navbars/Plus_symbol.svg" alt="plus_icon" />
          <img className='w-5 h-15' src="/assets/navbars/minus-icon.png" alt="minus_icon" />
        </div>
      </div>
      <Engineering></Engineering>
      <div className='flex flex-row justify-between mt-8'>
        <span className='font-margarine underline ml-8 text-2xl'>FiET</span>
        <div className='flex mr-8'>
          <img className='w-10 h-15' src="/assets/navbars/Plus_symbol.svg" alt="plus_icon" />
          <img className='w-5 h-15' src="/assets/navbars/minus-icon.png" alt="minus_icon" />
        </div>
      </div>
      <FiET></FiET>
      <div className='h-8'></div>
    </div>
  )
}

export default OpenHamburger
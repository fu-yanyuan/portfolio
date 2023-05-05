import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillFilePdf } from "react-icons/ai"

export default function Navbar() {
  return (
    <div className='px-10 dark:text-white md:px-32'>
      <nav className='py-10 flex justify-between items-center'>
        {/* <h1 className='text-3xl font-mono'>Yanyuan Fu</h1> */}
        <ol className='flex items-center'>
          {/* <li>
    <a className='text-2xl font-mono hover:underline cursor-pointer pr-5 sm:text-3xl'>
      Yanyuan Fu
    </a>
  </li> */}
          <li>
            <a className='text-xl font-mono hover:underline cursor-pointer pr-5 sm:text-2xl'>
              About
            </a>
          </li>
          <li>
            <a className='text-xl font-mono hover:underline cursor-pointer pr-5 sm:text-2xl'>
              Contact
            </a>
          </li>
          <li>
            <a
              href='https://fu-yanyuan.github.io/blog/'
              className='text-xl font-mono hover:underline cursor-pointer pr-5 sm:text-2xl'>
              Blog
            </a>
          </li>
        </ol>

        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className='cursor-pointer text-2xl' />
          </li>
          <li className='ml-4 flex items-center sm:ml-10'>
            <AiFillFilePdf className='text-3xl' />
            <a
              href='/cv_fu.pdf'
              download='CV_YanyuanFu_2023.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-2 text-white rounded-md ml-0 sm:px-10'>
              CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

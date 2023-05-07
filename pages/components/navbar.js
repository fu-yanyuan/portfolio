export default function ({ darkMode }) {
  return (
    <div className='text-black w-full h-25 px-10 dark:text-white md:px-32'>
      <nav className='py-10 flex justify-between items-center'>
        <div
          onClick={() => setNav(!sideBar)}
          className='z-50 cursor-pointer text-2xl hover:text-3xl duration-200 sm:hidden'>
          {sideBar ? <FaTimes /> : <FaBars />}
        </div>

        <ol className='hidden sm:flex items-center'>
          {navLinks.map(({ id, navName, navLink }) => (
            <li key={id}>
              <a
                href={navLink}
                className='text-xl font-mono hover:underline cursor-pointer pr-5 sm:text-2xl lg:text-3xl'>
                {navName}
              </a>
            </li>
          ))}
        </ol>

        <ul className='flex items-center'>
          <div className='flex items-center justify-between text-3xl'>
            <span className='pr-2 text-3xl'><FiSun /></span>
            <input type="checkbox"
              onClick={() => setDarkMode(!darkMode)}
              className="toggle px-5" />
            <span className='pl-2 text-3xl'><FiMoon /></span>
          </div>
          
          <li className='ml-4 flex items-center sm:ml-10'>
            <a
              href='/cv_fu.pdf'
              download='CV_YanyuanFu_2023.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-2 text-lg text-white rounded-md ml-0 sm:px-10 hover:scale-110 duration-200'>
              CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from './api/NavBar';
import About from './components/about';
import Footer from './components/footer';

import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import { FaBars, FaTimes } from "react-icons/fa"
import { FiMoon, FiSun } from "react-icons/fi"

import Image from 'next/image'
import fu from '../public/fu.jpg'

import { useState } from 'react';
import { Link as Scroll } from 'react-scroll'

import ScrollToTopButton from './components/scrollToTopButton';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [sideBar, setNav] = useState(false);
  const navLinks = [
    {
      id: 1,
      navName: 'Home',
      navLink: 'top'
    },
    {
      id: 2,
      navName: 'About',
      navLink: 'about'
    },
    {
      id: 3,
      navName: 'Contact',
      navLink: '# '
    },
    // {
    //   id: 3,
    //   navName: 'Blog',
    //   navLink: 'https://fu-yanyuan.github.io/blog/'
    // },
  ]
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Yanyuan</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" /> 
      </Head>

      <main className='bg-slate-50 dark:bg-slate-800 min-h-screen'>
        <div id='top' className='text-black w-full h-25 px-10 dark:text-white md:px-32'>
          <nav className='py-10 flex justify-between items-center'>
            <div
              onClick={() => setNav(!sideBar)}
              className='z-50 cursor-pointer text-2xl hover:text-3xl duration-200 md:hidden'>
              {sideBar ? <FaTimes /> : <FaBars />}
            </div>

            <ol className='hidden md:flex items-center'>
              {navLinks.map(({ id, navName, navLink }) => (
                <li key={id} className='text-xl font-mono hover:underline cursor-pointer pr-5 sm:text-2xl lg:text-3xl'>
                  <Scroll to={navLink} smooth duration={500} className='font-mono'>
                    {navName}
                  </Scroll>
                </li>
              ))}
              <li className='text-xl font-mono hover:underline cursor-pointer pr-5 sm:text-2xl lg:text-3xl'>
                <a href='https://fu-yanyuan.github.io/blog/' className='font-mono'>
                  Blog
                </a>
              </li>
            </ol>

            <ul className='flex items-center'>
              <div className='flex items-center justify-between text-3xl'>
                <span className='pr-2 text-3xl'><FiSun /></span>
                <input type="checkbox"
                  onClick={() => setDarkMode(!darkMode)}
                  className="toggle px-5" />
                <span className='pl-2 text-3xl'><FiMoon /></span>
              </div>

              {/* <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-2xl hover:text-3xl duration-200 lg:text-3xl lg:hover:text-4xl' />
              </li> */}
              <li className='ml-4 flex items-center sm:ml-10'>
                {/* <AiFillFilePdf className='text-3xl lg:text-4xl' /> */}
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

        {sideBar && (
          <ul className={`flex flex-col absolute z-10 justify-center items-center 
                          top-0 left-0 h-screen w-full pt-20 
                          bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-200
                          md:hidden`}>
            {navLinks.map(({ id, navName, navLink }) => (
              <li
                className='py-8'
                key={id}>
                {/* <a
                  onClick={() => setNav(!sideBar)}
                  href={navLink}
                  className='text-4xl font-mono hover:underline cursor-pointer'>
                  {navName}
                </a> */}
                <Scroll onClick={() => setNav(!sideBar)} to={navLink} smooth duration={500} className='text-4xl font-mono hover:underline cursor-pointer'>
                  {navName}
                </Scroll>
              </li>
            ))}
            <li className='py-8'>
              <a
                // onClick={() => setNav(!sideBar)}
                href='https://fu-yanyuan.github.io/blog/'
                className='text-4xl font-mono hover:underline cursor-pointer'>
                Blog
              </a>
            </li>
          </ul>
        )}


        <div className='h-auto md:px-20 lg:px-40 z-0'>
          <div className='relative mx-auto w-72 h-72 rounded-full mt-0 mb-5 overflow-hidden lg:w-96 lg:h-96 lg:my-10'>
            <Image src={fu} />
          </div>

          <div className='text-center px-10 dark:text-white'>
            <h2 className='text-5xl pb-2 text-teal-600 font-medium hover:text-6xl duration-200 cursor-pointer'>
              Yanyuan Fu
            </h2>
            <h3 className='text-2xl py-2 text-black dark:text-white'>
              <span className='text-3xl'>👨‍💻</span>
              Open To New Job Opportunities
              <span className='text-3xl'>👨‍💻</span>
            </h3>
            <div className='flex items-center mx-auto max-w-4xl'>
              <p className='text-lg pt-5 leading-8 text-gray-800 dark:text-slate-200 md:px-20 lg:px-30'>
                I'm a graduate student at the University of Tokyo. My research interests lie in the field of Computer Vision, with a particular focus on Neural Radiance Fields. In addition to my research, I also have experience as a software engineer.
                {/* I'm currently seeking new opportunities for employment or an internship where I can apply my skills and knowledge to real-world problems. */}
              </p>
            </div>

          </div>

          <div className='text-5xl flex flex-col items-center ss:flex-row justify-center gap-16 py-10 text-gray-600 dark:text-slate-400'>
            <a className='hover:scale-110 duration-200' href='https://github.com/fu-yanyuan'>
              <AiFillGithub />
            </a>
            <a className='hover:scale-110 duration-200' href='https://www.linkedin.com/in/yanyuan-fu-32a7a3241/'>
              <AiFillLinkedin />
            </a>
            <a className='hover:scale-110 duration-200' href='mailto:yanyuan@g.ecc.u-tokyo.ac.jp'>
              <AiFillMail />
            </a>
          </div>
        </div>

        <About darkMode={darkMode} />

        <Footer />

        <ScrollToTopButton />


      </main>
    </div>
  )
}

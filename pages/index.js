import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from './api/NavBar';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillFilePdf } from "react-icons/ai"
import { FaBars, FaTimes } from "react-icons/fa"

import Image from 'next/image'
import avocado from '../public/pngegg.png'
import smilyG from '../public/emoji-avatar.png'
import fu from '../public/fu.jpg'
// import cvPdf from '../public/cv_fu.pdf'

import { useState } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [sideBar, setNav] = useState(false);
  const navLinks = [
    {
      id: 1,
      navName: 'About',
      navLink: '# '
    },
    {
      id: 2,
      navName: 'Contact',
      navLink: '# '
    },
    {
      id: 3,
      navName: 'Blog',
      navLink: 'https://fu-yanyuan.github.io/blog/'
    },
  ]
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Yanyuan</title>
        {/* <link rel='icon' href=''/> */}
      </Head>

      <main className='dark:bg-slate-800 min-h-screen'>
        <div className='w-full h-25 px-10 dark:text-white md:px-32'>
          <nav className='py-10 flex justify-between items-center'>
            <div
              onClick={() => setNav(!sideBar)}
              className='z-10 cursor-pointer text-2xl hover:text-3xl duration-200 sm:hidden'>
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
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-2xl hover:text-3xl duration-200 lg:text-3xl lg:hover:text-4xl' />
              </li>
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
          <ul className='flex flex-col absolute z-0 justify-center items-center top-0 left-0 h-1/5 w-1/5 pt-20 bg-gradient-to-b from-cyan-500 to-teal-500 sm:hidden'>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        )}


        <div className='md:px-20 lg:px-40'>
          {/* <div className='relative mx-auto w-80 h-80 bg-gradient-to-b from-teal-500 to-white rounded-3xl'>
            <Image src={} />
          </div> */}
          <div className='relative mx-auto w-80 h-80 bg-gradient-to-b from-teal-500 to-white rounded-full my-5 overflow-hidden lg:w-96 lg:h-96 lg:my-10'>
            <Image src={fu} />
          </div>

          <div className='text-center px-10 dark:text-white'>
            <h2 className='text-5xl pb-2 text-teal-600 font-medium'>Yanyuan Fu</h2>
            <h3 className='text-2xl py-2'>
              is currently seeking new opportunities
            </h3>
            <p className='text-lg pt-5 leading-8 text-gray-800 dark:text-white md:px-20 lg:px-30'>
              I'm a graduate student at the University of Tokyo. My research interests lie in the field of Computer Vision, with a particular focus on Neural Radiance Fields. In addition to my research, I also have experience as a software engineer.
              {/* I'm currently seeking new opportunities for employment or an internship where I can apply my skills and knowledge to real-world problems. */}
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-10 text-gray-600'>
            <a href='https://github.com/fu-yanyuan'>
              <AiFillGithub />
            </a>
            <a href='https://www.linkedin.com/in/yanyuan-fu-32a7a3241/'>
              <AiFillLinkedin />
            </a>
          </div>

          {/* <div className='relative mx-auto w-80 h-80 bg-gradient-to-b from-teal-500 to-white rounded-full my-10 overflow-hidden md:w-96 md:h-96'>
            <Image src={fu} />
          </div> */}
        </div>


      </main>


      {/* <div className='relative mx-auto w-80 h-80 bg-gradient-to-b from-teal-500 to-white rounded-3xl'>
        <Image src={smilyG} />
      </div>

      <div className='text-center p-10'>
        <h2 className='text-5xl pb-2 text-teal-600 font-medium'>Yanyuan</h2>
        <h3 className='text-2xl py-2'>
          software engineer.
        </h3>
        <p className='text-lg py-5 leading-8 text-gray-800'>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961</p>
      </div>

      <div className='text-5xl flex justify-center gap-16 py-10 text-gray-600'>
        <AiFillGithub />
        <AiFillLinkedin />
      </div>

      <div className='relative mx-auto w-80 h-80 bg-gradient-to-b from-teal-500 to-white rounded-full my-10 overflow-hidden'>
        <Image src={avocado} />
      </div> */}


      {/* <div className='bg-blue-400 min-h-'>
        <h1 className='text-2xl font-bold text-center'>Hello, this is Yanyuan</h1>
      </div> */}


    </div>
  )
}

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import { FaLinkedin, FaGithub, FaQuora, FaMediumM } from 'react-icons/fa';
import { RiArrowDownWideLine } from 'react-icons/ri';

import heroImg from '../assets/heroImg_grayBG.jpg';

const container = (delay) => ({
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Home() {
  return (
    <div
      name='home'
      className='h-screen w-full pt-24 flex flex-col gap-4 px-4 py-2 justify-start items-center bg-gradient-to-b from-black via-black to-gray-800 text-white'
    >
      <div className='flex flex-col justify-center items-center w-full gap-2'>
        <motion.img
          variants={container(0)}
          initial='hidden'
          animate='visible'
          src={heroImg}
          alt='my profile'
          className='w-32 h-32 lg:w-48 lg:h-48'
        />
        <motion.h2
          variants={container(0.5)}
          initial='hidden'
          animate='visible'
          className='text-4xl capitalize tracking-tight font-thin lg:text-6xl'
        >
          Nandakishore Ellendula
        </motion.h2>
      </div>
      <div className='flex flex-col w-full gap-2 justify-center items-center'>
        <motion.h3
          variants={container(0.75)}
          initial='hidden'
          animate='visible'
          className='text-xl lg:text-2xl w-fit capitalize bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'
        >
          Software Engineer
        </motion.h3>
        <motion.p
          variants={container(1)}
          initial='hidden'
          animate='visible'
          className='text-sm max-w-xl font-light tracking-tight sm:w-full md:w-3/5 md:ml-6 text-gray-400'
        >
          A Data Science and Machine Learning enthusiast with a passion for uncovering 
          insights and building impactful solutions. I thrive on analyzing complex data 
          and applying advanced techniques to solve real-world challenges.
        </motion.p>
      </div>
      <div className='flex gap-2 mt-8'>
        <a href='https://www.linkedin.com/in/nandakishore-ellendula-5b631b223/' target='_blank'>
          <FaLinkedin className='w-6 h-6 md:w-8 md:h-8' />
        </a>
        <a href='https://github.com/nanda-kishore5' target='_blank'>
          <FaGithub className='w-6 h-6 md:w-8 md:h-8' />
        </a>
      </div>
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className='cursor-pointer'
      >
        <Link to='about' smooth duration={500} offset={-50}>
          <RiArrowDownWideLine className='w-8 h-8' />
        </Link>
      </motion.div>
    </div>
  );
}

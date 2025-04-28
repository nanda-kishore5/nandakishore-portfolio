import { IoIosArrowRoundForward } from 'react-icons/io';
import { PiEyeThin } from 'react-icons/pi';
import { TfiDownload } from 'react-icons/tfi';
import { motion } from 'framer-motion';
import AboutItem from './AboutItem';
import aboutImg from '../assets/aboutImg.jpg';
import resume from '../assets/resume_nandakishore.pdf';
import { SKILLS, RESUME_LINK } from '../constants';
import { Link } from 'react-scroll';
import SkillCard from './SkillCard';

export default function About() {
  return (
    <section
      className='section-padding bg-black text-white border-b border-neutral-800'
      id='about'
    >
      <div className='flex flex-col px-2 md:px-10'>
        <div className='flex justify-start sm:justify-center items-start'>
          <div className='flex flex-1 justify-start gap-4'>
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              src={aboutImg}
              alt='about profile'
              className='hidden lg:flex lg:w-1/5 lg:h-1/5 rounded-md opacity-70'
            />
            <div className='flex flex-col gap-4 flex-1'>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col gap-2 border-b border-gray-600 pb-3'
              >
                <h3 className='text-2xl font-light tracking-tight capitalize'>
                  Nandakishore Ellendula
                </h3>
                <p className='text-md capitalize text-gray-500'>
                  software engineer
                </p>
                <p className='text-sm capitalize text-gray-500'>
                  MS CS @ University of Central Missouri '2025
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className='w-full grid grid-cols-1 grid-flow-row justify-items-start sm:grid-cols-2 sm:gap-x-8 h-fit p-2'
              >
                <AboutItem tag='First name' value='Nandakishore' />
                <AboutItem tag='last name' value='Ellendula' />
                <AboutItem
                  tag='email'
                  value='ellendulanandakishore23@gmail.com'
                  valueCase='normal-case'
                />
                <AboutItem
                  tag='DOB'
                  tagCase='uppercase'
                  value='June 5, 2001'
                />
                <AboutItem tag='Address' value='Overland Park, Kansas' />
                <AboutItem tag='Languages' value='English, Hindi, Telugu' />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className='flex justify-center lg:justify-start flex-wrap gap-4 mt-2 font-light'
              >
                <div className='p-[0.1rem] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full'>
                  <div className='flex items-center gap-1 px-4 py-2 rounded-full bg-black capitalize '>
                    <a
                      href={RESUME_LINK}
                      target='_blank'
                      className='group rounded-full p-1 cursor-pointer hover:bg-white duration-100 transition-all ease-in-out'
                    >
                      <PiEyeThin className='w-5 h-5 group-hover:text-black duration-100' />
                    </a>
                    <p className='font-normal'>Resume</p>
                    <a
                      href={resume}
                      download='resume'
                      className='group rounded-full p-1 cursor-pointer hover:bg-white duration-100 transition-all ease-in-out'
                    >
                      <TfiDownload className='w-4 h-4 group-hover:text-red-400 duration-100' />
                    </a>
                  </div>
                </div>
                <Link
                  smooth
                  duration={500}
                  to='contact'
                  className='group flex gap-2 w-fit cursor-pointer px-4 py-2 border-white-500 border rounded-full hover:bg-white hover:text-black hover:font-medium transition-all duration-100 ease-in-out '
                >
                  <span>Let's Connect</span>
                  <IoIosArrowRoundForward className='w-6 h-6 group-hover:rotate-90 duration-100' />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className='mt-20'>
          <h2 className='capitalize text-2xl text-center mb-10'>Skills</h2>
          <div className='grid gap-3 grid-cols-1 grid-flow-row sm:grid-cols-2 md:grid-cols-3'>
            {SKILLS.map((skill, i) => {
              return <SkillCard index={i} skill={skill} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section
      className='section-padding bg-black text-white border-b border-neutral-900'
      id='projects'
    >
      <div className='px-2 md:px-10'>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className='capitalize text-2xl text-center mb-20'
        >
          projects
        </motion.h2>
        <div>
          {PROJECTS.map((prj, idx) => {
            return (
              <div key={idx} className='flex flex-wrap mb-8 md:justify-center'>
                <div className='w-full flex md:w-1/4'>
                  {prj.image && (
                    <motion.img
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      src={prj.image}
                      width={150}
                      height={150}
                      alt={prj.title}
                      className='mb-6 rounded'
                    />
                  )}
                </div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className='w-full max-w-xl md:w-3/4'
                >
                  <h6 className='capitalize mb-1 font-semibold '>
                    {prj.title}
                  </h6>
                  {prj.gitlink && (
                    <a
                      className='flex w-fit items-center gap-1 text-sm mb-2 px-2 py-1 bg-neutral-900 rounded text-gray-500'
                      href={prj.gitlink}
                      target='_blank'
                    >
                      GitHub
                      <FaExternalLinkAlt className='w-3 h-3' />
                    </a>
                  )}
                  <p className='mb-4 text-gray-400'>{prj.description}</p>
                  <div className='flex flex-wrap gap-1'>
                    {prj.technologies.map((tech, i) => {
                      return (
                        <span
                          key={i}
                          className='capitalize rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

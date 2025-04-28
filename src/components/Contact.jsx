import { TbSend } from 'react-icons/tb';
import { FaLinkedin, FaGithub, FaMediumM, FaQuora } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      className='section-padding bg-gradient-to-b from-black via-black to-gray-800 text-white border-b border-neutral-900'
      id='contact'
    >
      <div className='px-2 md:px-10'>
        <div className='w-full'>
          <h2 className='capitalize text-2xl text-center mb-10'>
            Let's Connect
          </h2>
          <div className='flex justify-center mb-4 md:mb-8 text-neutral-900'>
            <form
              action='https://getform.io/f/zazkdeqb'
              method='post'
              className=''
            >
              <div className='flex gap-1 mb-2'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  className='w-full sm:w-fit rounded outline-none bg-neutral-300 p-1'
                />
                <input
                  type='text'
                  name='name'
                  id='name'
                  required
                  placeholder='Email*'
                  className='w-full sm:w-fit rounded outline-none bg-neutral-300 p-1'
                />
              </div>
              <textarea
                required
                className='w-full rounded outline-none bg-neutral-300 p-1 '
                name='message'
                id='message'
                cols='30'
                rows='5'
                placeholder='Message*'
              />
              <div className='flex justify-center mt-2'>
                <button
                  type='submit'
                  className='flex gap-1 justify-center items-center text-white px-4 py-2 border-white-500 border rounded-md hover:bg-white hover:text-black hover:font-medium transition-all duration-100 ease-in-out'
                >
                  <span>Send</span>
                  <TbSend className='w-5 h-5' />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-2 mt-4'>
        <a href='https://www.linkedin.com/in/nandakishore-ellendula-5b631b223/' target='_blank'>
          <FaLinkedin className='w-6 h-6 md:w-8 md:h-8' />
        </a>
        <a href='https://github.com/nanda-kishore5' target='_blank'>
          <FaGithub className='w-6 h-6 md:w-8 md:h-8' />
        </a>
      </div>
    </section>
  );
}

import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Buggin&#39; Out
              </span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Let&#39;s' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='mailto:garbaccio20@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Email
                </Footer.Link>
                <Footer.Link
                  href='https://www.linkedin.com/in/nicogarbaccio/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Connect!' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/nicogarbaccio'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href='https://portfolio-nicogarbaccio.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
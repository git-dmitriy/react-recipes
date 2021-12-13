import { FaGithub } from 'react-icons/fa';
import logo from 'logo.svg';
import LazyLoad from 'react-lazyload';

export const Footer = () => {
  return (
    <footer className='bg-gray-900 dark:bg-gray-800 py-3 text-white'>
        <div className=''>
          <div className='flex items-center text-2xl font-bold cursor-default sm:mr-20'>
            <LazyLoad once offset={100} height={412} className='w-10 mr-2'>
              <img src={logo} alt='logo' className='w-full' />
            </LazyLoad>
            <span>Recipes</span>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <span className='mr-3'>
            © {new Date().getFullYear()} Dmitriy Shalberkin
          </span>
          <a
            className='text-4xl hover:text-gray-400 transition duration-300'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/git-dmitriy'
          >
            <FaGithub className='fill-current' />
          </a>
        </div>
      </div>
    </footer>
  );
};

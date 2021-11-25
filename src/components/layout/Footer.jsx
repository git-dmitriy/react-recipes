import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='bg-gray-900 py-3 text-white'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center'>
          © {new Date().getFullYear()} Dmitriy Shalberkin
          <a
            className='mx-4 text-4xl hover:text-gray-400 transition duration-300'
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

import { FaGithub } from 'react-icons/fa';
// import LazyLoad from 'react-lazyload';
import Logo from '@assets/logo.svg'

export const Footer: React.FC = () => {
    return (
        <footer className='bg-gray-900 dark:bg-gray-800 py-3 text-white'>
            <div className='container mx-auto px-2 flex justify-around items-center'>
                <div className=''>
                    <div className='flex items-center text-2xl font-bold cursor-default sm:mr-20'>
                        {/*<LazyLoad*/}
                        {/*    once*/}
                        {/*    offset={100}*/}
                        {/*    height={40}*/}
                        {/*    classNamePrefix='w-10 mr-2 '*/}
                        {/*>*/}
                            <img
                                src={Logo}
                                alt='logo'
                                className='size-12'
                            />
                        {/*</LazyLoad>*/}
                        <span className='ms-2'>Recipes</span>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
          <span className='mr-3 text-right'>
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

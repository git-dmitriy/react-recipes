import {FaGithub} from 'react-icons/fa';
import Logo from '@assets/logo.svg';
import {APP_VERSION} from '@/appVersion';

export const Footer: React.FC = () => {
    return (
        <footer className='bg-gray-900 dark:bg-gray-800 py-3 text-white'>
            <div className='container mx-auto px-2 flex flex-col items-center'>
                <div className='w-full flex justify-around items-center'>
                    <div className='flex items-center text-2xl font-bold cursor-default sm:mr-20'>
                        <img
                            src={Logo}
                            alt='logo'
                            className='size-12'
                            loading="lazy"
                        />
                        <span className='ms-2'>Recipes</span>
                        <span className="text-xs text-gray-500 ms-1">v{APP_VERSION}</span>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span className='mr-3 text-right'>
                          © {new Date().getFullYear()} {' '}
                            <a
                                className='hover:text-gray-400 transition duration-300'
                                target='_blank'
                                rel='noreferrer'
                                href="https://dmitriy-shalberkin.ru"
                            >dmitriy-shalberkin.ru</a>
                        </span>
                        <a
                            className='text-4xl hover:text-gray-400 transition duration-300'
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/git-dmitriy'
                            aria-label="GitHub account"
                        >
                            <FaGithub className='fill-current'/>
                        </a>
                    </div>
                </div>
                <a
                    href="https://www.themealdb.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-center text-gray-400 hover:text-gray-100 transition duration-300"
                >
                    Recipe data by TheMealDB
                </a>

            </div>
        </footer>
    );
};

import {useState, ChangeEventHandler} from 'react';
import {useNavigate} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

export const Search: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (value: string) => {
        if (value.trim().length !== 0) {
            navigate({
                pathname: '/recipes',
                search: new URLSearchParams({search: value.trim()}).toString(),
            });
            setSearchQuery('');
        }
    };

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearchQuery(event.target.value);
    };

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        handleSearch(searchQuery);
    };

    return (
        <form className="flex" onSubmit={onSubmitHandler}>
            <div className='relative my-2 mx-auto dark:text-gray-900'>
                <input
                    role='searchbox'
                    type='text'
                    className='focus:outline-hidden focus:ring-2 dark:placeholder:text-gray-600 bg-gray-100 focus:ring-red-500 shadow-xs rounded-full w-52 sm:w-60 md:w-72 lg:w-80 xl:w-96 border-0 p-3 pl-10 min-w-full'
                    placeholder="Search by name or ingredient..."
                    value={searchQuery}
                    onChange={onChangeHandler}
                />
                <button
                    type="submit"
                    aria-label="Search"
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 ml-4 cursor-pointer bg-transparent border-0 p-0'
                >
                    <BsSearch className='fill-current'/>
                </button>
            </div>
        </form>
    );
};

import {Link} from 'react-router-dom';

export const PageNotFound: React.FC = () => {
    return (
        <div className="h-full grid place-items-center content-center my-6 px-2">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Page not found</h2>
                <p className="mb-4">The page you are looking for does not exist.</p>
                <Link
                    to="/"
                    className="text-red-500 hover:underline font-semibold"
                >
                    Go to home
                </Link>
            </div>
        </div>
    );
};

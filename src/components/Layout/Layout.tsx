type P = { children: React.ReactNode };

export const Layout = ({ children }: P) => {
    return (
        <div className='container h-full px-3 sm:px-5 py-10 mx-auto'>
            {children}
        </div>
    );
};
